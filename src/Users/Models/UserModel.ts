import { Email } from './Email'
import { Password } from './Password'
import { Username } from './Username'

export class UserModel {
  readonly username: Username
  readonly email: Email
  readonly password: Password

  constructor(username: string, email: string, password: string) {
    this.username = new Username(username)
    this.email = new Email(email)
    this.password = new Password(password)
  }

  getUsername(): Username {
    return this.username
  }

  getEmail(): Email {
    return this.email
  }

  getPassword(): Password {
    return this.password
  }
}
