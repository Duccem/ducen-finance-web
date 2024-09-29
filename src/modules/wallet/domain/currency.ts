import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import { StringValueObject } from '@/modules/shared/domain/core/ValueObject';
import { Primitives } from '@/modules/shared/domain/types/Primitives';

export class Currency {
  constructor(
    public id: Uuid,
    public name: StringValueObject,
    public symbol: StringValueObject
  ) {}

  public static fromPrimitives(data: Primitives<Currency>): Currency {
    return new Currency(
      new Uuid(data.id),
      new StringValueObject(data.name),
      new StringValueObject(data.symbol)
    );
  }

  public toPrimitives(): Primitives<Currency> {
    return {
      id: this.id.toString(),
      name: this.name.value,
      symbol: this.symbol.value,
    };
  }
}

