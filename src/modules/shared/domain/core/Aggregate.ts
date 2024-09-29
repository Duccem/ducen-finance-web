import { Primitives } from '../types/Primitives';
import { DomainEvent } from './DomainEvent';
import { DateValueObject } from './ValueObject';
import { Uuid } from './value-objects/Uuid';

export abstract class Aggregate {
  private domainEvents: Array<DomainEvent>;
  abstract toPrimitives(): Primitives<Aggregate>;
  static fromPrimitives: (params: Primitives<Aggregate>) => Aggregate;
  constructor(public id: Uuid, public createdAt: DateValueObject, public updatedAt: DateValueObject) {
    this.domainEvents = [];
  }

  public pullDomainEvents(): Array<DomainEvent> {
    const domainEvents = this.domainEvents.slice();
    this.domainEvents = [];
    return domainEvents;
  }

  public record(event: DomainEvent): void {
    this.domainEvents.push(event);
  }
}
