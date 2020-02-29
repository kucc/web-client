import Day from './day';
import { MONTH_NAME } from '../../../constant';
import { getYearOfThisMoment, getMonthOfThisMoment } from '../../../lib/date';

export default class Month {
  public constructor(
    public readonly year: number,
    public readonly month: number,
  ) {}

  public static now() {
    return new Month(getYearOfThisMoment(), getMonthOfThisMoment() + 1);
  }

  public toString() {
    return `${this.year} ${MONTH_NAME[this.month - 1]}`;
  }

  public getDate() {
    return new Date(this.year, this.month);
  }

  public getDayAfterFirstDayOfThisMonth(after: number) {
    return new Date(this.year, this.month - 1, after + 1);
  }

  public getDayAfterLastDayOfThisMonth(after: number) {
    return new Date(this.year, this.month, after);
  }

  public getDaysInMonth() {
    return new Date(this.year, this.month, 0).getDate();
  }

  public getFirstDayOfTheWeek() {
    return new Date(this.year, this.month - 1, 1).getDay();
  }

  public getLastDayOfTheWeek() {
    return new Date(this.year, this.month, 0).getDay();
  }

  public getLastDateOfThisMonth() {
    return new Date(this.year, this.month, 0);
  }

  public getAllDayOfTheMonth(): Day[] {
    const allDay = [];

    const firstDayOfTheWeek = this.getFirstDayOfTheWeek();

    for (let i = firstDayOfTheWeek; i > 0; i--) {
      allDay.push(new Day(this.getDayAfterFirstDayOfThisMonth(-i), false));
    }

    const totalDayOfTheMonth = this.getDaysInMonth();

    for (let i = 0; i < totalDayOfTheMonth; i++) {
      allDay.push(new Day(this.getDayAfterFirstDayOfThisMonth(i), true));
    }

    const lastDayOfTheWeek = this.getLastDayOfTheWeek();

    for (let i = 1; i <= 6 - lastDayOfTheWeek; i++) {
      allDay.push(new Day(this.getDayAfterLastDayOfThisMonth(i), false));
    }

    return allDay;
  }
}
