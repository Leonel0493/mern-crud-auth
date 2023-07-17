import { Request, Response } from 'express'
import { UserModel } from '../Models/UserModel'
import _UserModel from '../Schemas/UserSchema'

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
