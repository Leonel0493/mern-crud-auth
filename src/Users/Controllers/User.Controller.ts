import { Request, Response } from 'express'
import { UserModel } from '../Models/UserModel'
import { Email } from '../Models/Email'
import _UserModel, { IUser } from '../Schemas/UserSchema'
import { TokenGenerator } from '../../Shared/application/TokenGenerator'
import { RESPONSE_ERROR } from '../../Shared/domain/ErrorTypes'

interface _UserRequest {
  username: string
  email: string
  password: string
}

export const UserSave = async (
  req: Request<{}, {}, _UserRequest>,
  res: Response
) => {
  const { username, email, password } = req.body

  try {
    const myUser = new UserModel(username, email, password)
    const passcryp = await myUser.getPassword().getPasswordHash()

    const newUser = new _UserModel({
      username: myUser.getUsername().value,
      email: myUser.getEmail().value,
      password: passcryp,
    })

    const userSaved = await newUser.save()
    const jwt = new TokenGenerator(userSaved.id)
    const userToken = await jwt.getJWT()

    res.cookie('token', userToken)

    res.status(200).json({
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
    })
  } catch (error) {
    console.error('Error on save user: ', error)
    res.status(500).json({ error: 'User not saved' })
  }
}

export const SearchUser = async ({
  email,
}: {
  email: Email
}): Promise<IUser | RESPONSE_ERROR> => {
  const userFound = await _UserModel.findOne({ email: email.value })

  if (userFound === null) {
    return { type: 'NOT_FOUND_USER' }
  } else {
    return userFound
  }
}
