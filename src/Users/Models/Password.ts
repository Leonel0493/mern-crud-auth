import { StringValueObject } from '../../Shared/domain/StringValueObject'
import { PasswordLengthExceeded } from './PasswordLengthExceeded'
import bcryptjs from 'bcryptjs'

export class Password extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.ensureLenghtIsLessThan25Charters(value)
  }

  public async getPasswordHash(): Promise<string> {
    const passwordHash = await bcryptjs.hash(this.value, 15)
    return passwordHash
  }

  private ensureLenghtIsLessThan25Charters(value: string): void {
    if (value.length > 25)
      throw new PasswordLengthExceeded(
        `The username <${value}> has more than 25 characters`
      )
  }
}
