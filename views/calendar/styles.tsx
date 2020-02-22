import styled from 'styled-components';

export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 136.6rem;
  min-width: 96rem;
  margin: 0 auto;
  min-height: 45rem;
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
