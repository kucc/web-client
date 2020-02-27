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

  public getDaysInMonth() {
    return new Date(this.year, this.month, 0).getDate();
  }
}
