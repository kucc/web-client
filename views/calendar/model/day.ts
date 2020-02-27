import Event from './event';

export default class Day {
  public day: number;
  public events: Event[];
  public isHoliday: boolean;
  public isSaturday: boolean;
}
