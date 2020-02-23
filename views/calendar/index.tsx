import { NextPage } from 'next';

import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';

const DummyData = [
  {
    name: '일정1',
    startAt: new Date(),
    endAt: new Date(),
  },
  {
    name: '일정2',
    startAt: new Date(),
    endAt: new Date(),
  },
  {
    name: '일정3',
    startAt: new Date(),
    endAt: new Date(),
  },
  {
    name: '일정4',
    startAt: new Date(),
    endAt: new Date(),
  },
];

const Calendar: NextPage = () => {
  return (
    <Layout>
      <S.Calendar>
        <Grid>
          <Row>
            <S.CalendarTitleContainer>
              <Col span={12}>
                <S.CalendarMenu>
                  <S.CalendarMenuTitle>캘린더</S.CalendarMenuTitle>
                  <S.CalendarMenuHistory>Home > Calendar</S.CalendarMenuHistory>
                </S.CalendarMenu>
              </Col>
            </S.CalendarTitleContainer>
          </Row>
          <Row>
            <S.CalendarContainer>
              <Col span={3}>
                <S.ScheduleContainer>
                  <S.ScheduleTitle>이 달의 일정</S.ScheduleTitle>
                  <S.Schedules></S.Schedules>
                </S.ScheduleContainer>
              </Col>
              <Col span={8} offset={1}></Col>
            </S.CalendarContainer>
          </Row>
        </Grid>
      </S.Calendar>
    </Layout>
  );
};

export default Calendar;
