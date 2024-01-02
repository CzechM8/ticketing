import { Publisher, OrderCanceledEvent, Subjects } from '@ancientrealms/common';

export class OrderCanceledPublisher extends Publisher<OrderCanceledEvent> {
  subject: Subjects.OrderCanceled = Subjects.OrderCanceled;
}
