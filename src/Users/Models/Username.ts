import { StringValueObject } from '../../Shared/domain/StringValueObject';
import { UsernameLengthExceeded } from './UsernameLengthExceeded';

export class Username extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLenghtIsLessThan25Charters(value);
  }

  private ensureLenghtIsLessThan25Charters(value: string): void {
    if (value.length > 25)
      throw new UsernameLengthExceeded(
        `The username <${value}> has more than 25 characters`
      );
  }
}
