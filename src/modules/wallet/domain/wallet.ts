import { Aggregate } from '@/modules/shared/domain/core/Aggregate';
import { File } from '@/modules/shared/domain/core/value-objects/File';
import { Uuid } from '@/modules/shared/domain/core/value-objects/Uuid';
import {
  DateValueObject,
  NumberValueObject,
  StringValueObject,
} from '@/modules/shared/domain/core/ValueObject';
import { Primitives } from '@/modules/shared/domain/types/Primitives';
import { CardType } from './card-type';
import { Company } from './company';
import { Currency } from './currency';

export class Wallet extends Aggregate {
  constructor(
    id: Uuid,
    public name: StringValueObject,
    public image: File,
    public balance: NumberValueObject,
    public currencyId: Uuid,
    public companyId: Uuid,
    public cardTypeId: Uuid,
    public userId: Uuid,
    createdAt?: DateValueObject,
    updatedAt?: DateValueObject,
    public currency?: Currency,
    public company?: Company,
    public cardType?: CardType
  ) {
    super(id, createdAt, updatedAt);
  }

  toPrimitives(): Primitives<Wallet> {
    return {
      id: this.id.toString(),
      name: this.name.value,
      image: this.image.value,
      balance: this.balance.value,
      currencyId: this.currencyId.toString(),
      companyId: this.companyId.toString(),
      cardTypeId: this.cardTypeId.toString(),
      userId: this.userId?.toString(),
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
      currency: this.currency?.toPrimitives(),
      company: this.company?.toPrimitives(),
      cardType: this.cardType?.toPrimitives(),
    };
  }

  static fromPrimitives(data: Primitives<Wallet>): Wallet {
    return new Wallet(
      new Uuid(data.id),
      new StringValueObject(data.name),
      new File(data.image),
      new NumberValueObject(data.balance),
      new Uuid(data.currencyId),
      new Uuid(data.companyId),
      new Uuid(data.cardTypeId),
      new Uuid(data.userId),
      new DateValueObject(data.createdAt),
      new DateValueObject(data.updatedAt),
      data.currency ? Currency.fromPrimitives(data.currency) : undefined,
      data.company ? Company.fromPrimitives(data.company) : undefined,
      data.cardType ? CardType.fromPrimitives(data.cardType) : undefined
    );
  }

  static Create(
    id: string,
    name: string,
    image: string,
    balance: number,
    currencyId: string,
    companyId: string,
    cardTypeId: string,
    userId: string
  ): Wallet {
    return new Wallet(
      new Uuid(id),
      new StringValueObject(name),
      new File(image),
      new NumberValueObject(balance),
      new Uuid(currencyId),
      new Uuid(companyId),
      new Uuid(cardTypeId),
      new Uuid(userId),
      DateValueObject.Today(),
      DateValueObject.Today()
    );
  }
}

