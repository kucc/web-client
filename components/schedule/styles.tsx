import styled from 'styled-components';

export const Schedule = styled.div`
  width: 100%;
  height: 6rem;

  margin-bottom: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`;

interface ColorBarProps {
  color: string;
}

export const ColorBar = styled.div<ColorBarProps>`
  width: 100%;
  height: 6rem;

  background-color: ${props => props.color};
`;

export const ScheduleContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const ScheduleName = styled.div`
  height: 3rem;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
`;

export const ScheduleDate = styled.div`
  height: 3rem;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
`;
