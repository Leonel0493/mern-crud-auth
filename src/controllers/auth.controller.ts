import { Request, Response } from 'express'
import { UserInterface } from '../models/UserInterface'
import bcryptjs from 'bcryptjs'
import User from '../models/users.model'

export const Register = async (
  req: Request<{}, {}, UserInterface>,
  res: Response
) => {
  const { username, email, password } = req.body

  try {
    const passwordHash = await bcryptjs.hash(password, 15)

    const user = new User({
      username,
      email,
      password: passwordHash,
    })

    const userSaved = await user.save()

    res.status(200).json({
      id: userSaved.id,
      email: userSaved.email,
      username: userSaved.username,
    })
  } catch (error) {
    console.error('Error on save user: ', error)
    res.status(500).json({ error: 'User not saved' })
  }
}

export const Login = (_req: Request, res: Response) => {
  res.send('login')
}
