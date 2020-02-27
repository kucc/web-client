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
    startAt: new Date(2020, 0, 10),
    endAt: new Date(2020, 1, 15),
    color: '#ED9C9C',
  },
  {
    name: '일정2',
    startAt: new Date(2020, 1, 10),
    endAt: new Date(2020, 1, 13),
    color: '#EAD88B',
  },
  {
    name: '일정3',
    startAt: new Date(2020, 1, 11),
    endAt: new Date(2020, 1, 22),
    color: '#ACB7E5',
  },
  {
    name: '일정4',
    startAt: new Date(2020, 1, 4),
    endAt: new Date(2020, 1, 6),
    color: '#A1DEAD',
  },
];

const Calendar: NextPage = () => {
  const {
    now,
    events,
    handleIncreaseMonth,
    handleDecreaseMonth,
  } = useCalendar();
  console.log(events);

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
                      {events.map((event, idx) => (
                        <Row key={idx}>
                          <Schedule
                            name={event.name}
                            color={event.color}
                            startAt={event.startAt}
                            endAt={event.endAt}
                          ></Schedule>
                        </Row>
                      ))}
                      {DummyData.map((event, idx) => (
                        <Row key={idx}>
                          <Schedule
                            name={event.name}
                            color={event.color}
                            startAt={event.startAt}
                            endAt={event.endAt}
                          ></Schedule>
                        </Row>
                      ))}
                    </Grid>
                  </S.Schedules>
                </S.ScheduleContainer>
              </Col>
              <Col span={9}>
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
                  <S.CalendarTable>
                    <S.CalendarTableHeader>
                      <S.CalendarWeek>
                        <S.CalendarDayMeta style={{ color: 'red' }}>
                          SUN
                        </S.CalendarDayMeta>
                        <S.CalendarDayMeta>MON</S.CalendarDayMeta>
                        <S.CalendarDayMeta>TUE</S.CalendarDayMeta>
                        <S.CalendarDayMeta>WED</S.CalendarDayMeta>
                        <S.CalendarDayMeta>THU</S.CalendarDayMeta>
                        <S.CalendarDayMeta>FRI</S.CalendarDayMeta>
                        <S.CalendarDayMeta>SAT</S.CalendarDayMeta>
                      </S.CalendarWeek>
                    </S.CalendarTableHeader>
                    <S.CalendarTableBody>
                      <S.CalendarWeek>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                          <S.EventBar position={1}></S.EventBar>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                      </S.CalendarWeek>
                      <S.CalendarWeek>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                      </S.CalendarWeek>
                      <S.CalendarWeek>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                      </S.CalendarWeek>
                      <S.CalendarWeek>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                      </S.CalendarWeek>
                      <S.CalendarWeek>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                        <S.CalendarDay>
                          <S.Day>1</S.Day>
                        </S.CalendarDay>
                      </S.CalendarWeek>
                    </S.CalendarTableBody>
                  </S.CalendarTable>
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
