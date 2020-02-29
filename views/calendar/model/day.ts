import Event from './event';

export default class Day {
  public constructor(day: Date, isThisMonth: boolean) {
    this.day = day;
    this.lastMoment = this.getLastMomentOfThisDay();
    this.isThisMonth = isThisMonth;
    this.isSunday = day.getDay() === 0;
    this.isSaturday = day.getDay() === 6;
    this.events = [];
  }

  public day: Date;
  public lastMoment: Date;
  public events: Event[];
  public isSaturday: boolean;
  public isSunday: boolean;
  public isThisMonth: boolean;

  public addEvent(event: Event) {
    this.events.push(event);
  }

  public getLastMomentOfThisDay() {
    return new Date(
      this.day.getFullYear(),
      this.day.getMonth(),
      this.day.getDate(),
      23,
      59,
      59,
    );
  }
}
