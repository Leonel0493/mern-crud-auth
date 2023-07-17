import jwt from 'jsonwebtoken'

export class TokenGenerator {
  readonly value: string

  constructor(value: string) {
    this.value = value
  }

  async getJWT(): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        {
          id: this.value,
        },
        `${process.env.JWT_SECRET_KEY}`,
        {
          expiresIn: '1d',
        },
        (err: Error | null, token?: string) => {
          if (err || !token) {
            reject(err)
          } else resolve(token)
        }
      )
    })
  }
}
