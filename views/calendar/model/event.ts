import EventResponse from '../interface/event-response';

export default class Event {
  public constructor(event: EventResponse) {
    this.Id = event.Id;
    this.name = event.name;
    this.userId = event.userId;
    this.description = event.description;
    this.startAt = new Date(event.startAt);
    this.endAt = new Date(event.endAt);
    this.color = event.color;
    this.place = event.place;
  }

  public readonly Id: number;
  public readonly name: string;
  public readonly userId: number;
  public readonly description: string;
  public readonly startAt: Date;
  public readonly endAt: Date;
  public readonly color: string;
  public readonly place: string;
}
