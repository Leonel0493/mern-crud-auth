import { Request, Response } from 'express'
import { Email } from '../../Users/Models/Email'
import { SearchUser } from '../../Users/Controllers/User.Controller'
import { Password } from '../../Users/Models/Password'
import { TokenGenerator } from '../../Shared/application/TokenGenerator'
import { IUser } from '../../Users/Schemas/UserSchema'

interface _AuthRequest {
  email: string
  password: string
}

export const UserAuth = async (
  req: Request<{}, {}, _AuthRequest>,
  res: Response
) => {
  const { email, password } = req.body
  try {
    const userEmail = new Email(email)
    const userFound = await SearchUser({ email: userEmail })

    if ('type' in userFound && userFound.type === 'NOT_FOUND_USER') {
      res.status(400).json({ message: 'User not found' })
    }

    const _user: IUser = userFound as IUser
    const userPassword = new Password(password)
    const pwdMatch = await userPassword.comparePassword(_user.password)

    if (!pwdMatch) {
      res.status(400).json({ message: 'Incorrect password' })
    }

    const jwt = new TokenGenerator(_user.id)
    const userToken = await jwt.getJWT()

    res.cookie('token', userToken)
    res.status(200).json({
      id: _user.id,
      username: _user.username,
      email: _user.email,
    })
  } catch (error) {
    console.error('Error on save user: ', error)
    res.status(500).json({ error: 'User not saved' })
  }
}
