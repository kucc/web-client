export default class Event {
  public constructor(
    public readonly Id: number,
    public readonly name: string,
    public readonly userId: number,
    public readonly description: string,
    public readonly startAt: Date,
    public readonly endAt: Date,
    public readonly color: string,
    public readonly place: string,
  ) {}
}
