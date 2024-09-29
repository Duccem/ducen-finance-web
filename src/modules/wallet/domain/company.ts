import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import { StringValueObject } from '@/modules/shared/domain/core/ValueObject';
import { Primitives } from '@/modules/shared/domain/types/Primitives';

export class Company {
  constructor(
    public id: Uuid,
    public name: StringValueObject,
    public image: StringValueObject
  ) {}

  public static fromPrimitives(data: Primitives<Company>): Company {
    return new Company(
      new Uuid(data.id),
      new StringValueObject(data.name),
      new StringValueObject(data.image)
    );
  }

  public toPrimitives(): Primitives<Company> {
    return {
      id: this.id.toString(),
      name: this.name.value,
      image: this.image.value,
    };
  }
}

