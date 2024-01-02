import { Publisher, Subjects, TicketCreatedEvent } from '@ancientrealms/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
