import { Aggregate } from '@/modules/shared/domain/core/Aggregate';
import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import {
  DateValueObject,
  NumberValueObject,
  StringValueObject,
} from '@/modules/shared/domain/core/ValueObject';
import { Primitives } from '@/modules/shared/domain/types/Primitives';

export class Movement extends Aggregate {
  constructor(
    id: Uuid,
    amount: NumberValueObject,
    comment: StringValueObject,
    type: StringValueObject,
    createdAt?: DateValueObject,
    updatedAt?: DateValueObject
  ) {
    super(id, createdAt, updatedAt);
  }

  toPrimitives(): Primitives<Movement> {
    return {
      id: this.id.toString(),
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }

  static fromPrimitives(data: Primitives<Movement>): Movement {
    return new Movement(
      new Uuid(data.id),
      new DateValueObject(data.createdAt),
      new DateValueObject(data.updatedAt)
    );
  }
}

