import { EmailPatternFail } from './EmailPatternFail'
import { StringValueObject } from '../../Shared/domain/StringValueObject'

export class Email extends StringValueObject {
  constructor(value: string) {
    super(value)
    this.validateEmailPattern(value)
  }

  private validateEmailPattern(value: string): void {
    const emailRegex: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    if (!emailRegex.test(value)) {
      throw new EmailPatternFail(`The email provided is not in a valid format`)
    }
  }
}
