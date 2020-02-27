import * as S from './styles';
import { Col } from '../grid/styles';

interface ScheduleProps {
  color: string;
  name: string;
  startAt: Date;
  endAt: Date;
}

const Schedule: React.FunctionComponent<ScheduleProps> = ({
  color,
  startAt,
  endAt,
  name,
}) => {
  return (
    <S.Schedule>
      <Col span={1} removePadding={true}>
        <S.ColorBar color={color}> </S.ColorBar>
      </Col>
      <Col span={10} removePadding={true} offset={1}>
        <S.ScheduleContent>
          <S.ScheduleName>{name}</S.ScheduleName>
          <S.ScheduleDate>
            {startAt.toLocaleDateString()} ~ {endAt.toLocaleDateString()}
          </S.ScheduleDate>
        </S.ScheduleContent>
      </Col>
    </S.Schedule>
  );
};

export default Schedule;
