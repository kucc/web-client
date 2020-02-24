import { NextPage } from 'next';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as S from './styles';
import { useCalendar } from './hooks';
import Layout from '../../components/layout';
import Schedule from '../../components/schedule';
import { Grid, Row, Col } from '../../components/grid/styles';

const DummyData = [
  {
    name: '일정1',
    startAt: new Date(),
    endAt: new Date(),
    color: '#ED9C9C',
  },
  {
    name: '일정2',
    startAt: new Date(),
    endAt: new Date(),
    color: '#EAD88B',
  },
  {
    name: '일정3',
    startAt: new Date(),
    endAt: new Date(),
    color: '#ACB7E5',
  },
  {
    name: '일정4',
    startAt: new Date(),
    endAt: new Date(),
    color: '#A1DEAD',
  },
];

const Calendar: NextPage = () => {
  const { now, handleIncreaseMonth, handleDecreaseMonth } = useCalendar();

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
            <S.CalendarFormatContainer>
              <Col span={3}>
                <S.ScheduleContainer>
                  <S.ScheduleTitle>이 달의 일정</S.ScheduleTitle>
                  <S.Schedules>
                    <Grid>
                      {DummyData.map((data, idx) => (
                        <Row key={idx}>
                          <Schedule color={data.color}></Schedule>
                        </Row>
                      ))}
                    </Grid>
                  </S.Schedules>
                </S.ScheduleContainer>
              </Col>
              <Col span={8} offset={1}>
                <S.CalendarContainer>
                  <S.CalendarHeader>
                    <S.ChangeMonthButton onClick={handleDecreaseMonth}>
                      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                    </S.ChangeMonthButton>
                    <S.MonthTitle>{now.toString()}</S.MonthTitle>
                    <S.ChangeMonthButton onClick={handleIncreaseMonth}>
                      <FontAwesomeIcon icon={faChevronRight} size="2x" />
                    </S.ChangeMonthButton>
                  </S.CalendarHeader>
                </S.CalendarContainer>
              </Col>
            </S.CalendarFormatContainer>
          </Row>
        </Grid>
      </S.Calendar>
    </Layout>
  );
};

export default Calendar;
