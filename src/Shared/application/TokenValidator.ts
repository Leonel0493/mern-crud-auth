import { NextFunction, Request, Response } from 'express'

export const AuthRequired = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { token } = req.cookies

  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  return next()
}
