import { Aggregate } from '@/modules/shared/domain/core/Aggregate';
import {
  DateValueObject,
  StringValueObject,
} from '@/modules/shared/domain/core/ValueObject';
import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import { Primitives } from '@/modules/shared/domain/types/Primitives';
import { UserEmail } from './user-email';

export class User extends Aggregate {
  constructor(
    id: Uuid,
    public externalId: StringValueObject,
    public email: UserEmail,
    createdAt: DateValueObject,
    updatedAt: DateValueObject
  ) {
    super(id, createdAt, updatedAt);
  }

  public static Create(
    id: string,
    externalId: string,
    email: string,
    role: string
  ): User {
    return new User(
      new Uuid(id),
      new StringValueObject(externalId),
      new UserEmail(email),
      DateValueObject.Today(),
      DateValueObject.Today()
    );
  }

  public static fromPrimitives(data: Primitives<User>) {
    return new User(
      new Uuid(data.id),
      new StringValueObject(data.externalId),
      new UserEmail(data.email),
      new DateValueObject(data.createdAt),
      new DateValueObject(data.updatedAt)
    );
  }

  toPrimitives(): Primitives<User> {
    return {
      id: this.id.value,
      externalId: this.externalId.value,
      email: this.email.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}

