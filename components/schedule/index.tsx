import * as S from './styles';
import { Col } from '../grid/styles';

interface ScheduleProps {
  color: string;
}

const Schedule: React.FunctionComponent<ScheduleProps> = ({ color }) => {
  return (
    <S.Schedule>
      <Col span={1} removePadding={true}>
        <S.ColorBar color={color}> </S.ColorBar>
      </Col>
      <Col span={10} removePadding={true} offset={1}>
        <S.ScheduleContent>
          <S.ScheduleName>일정 1</S.ScheduleName>
          <S.ScheduleDate>YY.MM.DD ~ YY.MM.DD</S.ScheduleDate>
        </S.ScheduleContent>
      </Col>
    </S.Schedule>
  );
};

export default Schedule;
