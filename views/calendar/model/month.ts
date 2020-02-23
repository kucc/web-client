import { getYearOfThisMoment, getMonthOfThisMoment } from '../../../lib/date';

export class Month {
  public constructor(
    public readonly year: number,
    public readonly month: number,
  ) {}

  public static now() {
    return new Month(getYearOfThisMoment(), getMonthOfThisMoment());
  }
}
