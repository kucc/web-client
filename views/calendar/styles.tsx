import styled from 'styled-components';

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarTitleContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
`;

export const CalendarFormatContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
  min-height: 46rem;
`;

export const CalendarMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 2rem;
  margin: 2rem 0 3rem 0;
`;

export const CalendarMenuTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const CalendarMenuHistory = styled.div`
  font-size: 1.2rem;
  margin-left: auto;
  margin-right: 1rem;
`;

export const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ScheduleTitle = styled.div`
  height: 8rem;
  font-size: 1.4rem;
  letter-spacing: 0.42px;
  color: #707070;
  text-align: left;
  display: flex;
  align-items: center;
`;

export const Schedules = styled.div``;

export const CalendarContainer = styled.div`
  width: 100%;

  padding: 0rem 3rem;
`;

export const CalendarHeader = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 1.2rem;
`;

export const ChangeMonthButton = styled.button`
  width: 3.8rem;
  height: 3.8rem;

  background-color: white;
  border: 0.2px solid #707070;
`;

export const MonthTitle = styled.div`
  font-size: 1.8rem;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  letter-spacing: 0.54px;
  color: #1a1311;
`;

export const DaysOfTheWeek = styled.div``;

export const CalendarTable = styled.table`
  border: 1px solid #707070;
  width: 100%;

  border-collapse: collapse;
`;

export const CalendarTableHeader = styled.thead`
  width: 100%;
`;

export const CalendarTableBody = styled.tbody`
  width: 100%;
`;

export const CalendarWeek = styled.tr`
  width: 100%;
`;

export const CalendarDayMeta = styled.th`
  width: 14.3%;
  font-size: 1.2rem;
  padding: 0.4rem 0rem;

  color: black;
`;

export const CalendarDay = styled.td`
  position: relative;
  width: 14.3%;
  height: 8rem;

  border: 1px solid #707070;
`;

interface DayProps {
  isThisMonth?: boolean;
  isSunday?: boolean;
  isSaturday?: boolean;
}

export const Day = styled.div<DayProps>`
  z-index: 200;
  position: absolute;
  left: 10%;
  top: 10%;
  font-weight: bold;

  color: ${props =>
    !props.isThisMonth
      ? 'gray'
      : props.isSunday
      ? 'red'
      : props.isSaturday
      ? 'blue'
      : 'black'};
`;

interface EventBarProps {
  position?: number;
  color?: string;
}

export const EventBar = styled.div<EventBarProps>`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 20%;

  top: ${prop => (prop.position ? `${100 - prop.position * 20}%` : `0%`)};
  background-color: ${prop => (prop.color ? prop.color : 'gray')};
`;
