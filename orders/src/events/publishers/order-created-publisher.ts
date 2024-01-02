import { Publisher, OrderCreatedEvent, Subjects } from '@ancientrealms/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
