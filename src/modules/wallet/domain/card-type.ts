import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import { StringValueObject } from '@/modules/shared/domain/core/ValueObject';
import { Primitives } from '@/modules/shared/domain/types/Primitives';

export class CardType {
  constructor(
    public id: Uuid,
    public name: StringValueObject,
    public image: StringValueObject
  ) {}

  public static fromPrimitives(data: Primitives<CardType>): CardType {
    return new CardType(
      new Uuid(data.id),
      new StringValueObject(data.name),
      new StringValueObject(data.image)
    );
  }

  public toPrimitives(): Primitives<CardType> {
    return {
      id: this.id.toString(),
      name: this.name.value,
      image: this.image.value,
    };
  }
}
