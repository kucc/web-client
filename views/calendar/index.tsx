import { NextPage } from 'next';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Day from './model/day';
import * as S from './styles';
import { useCalendar } from './hooks';
import { chunkArray } from '../../lib';
import Layout from '../../components/layout';
import Schedule from '../../components/schedule';
import { Grid, Row, Col } from '../../components/grid/styles';

const Calendar: NextPage = () => {
  const {
    now,
    events,
    matchedDays,
    handleIncreaseMonth,
    handleDecreaseMonth,
  } = useCalendar();

  const chunkedMatchedDays = chunkArray(matchedDays, 7);

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
                        <S.CalendarDayMeta style={{ color: 'blue' }}>
                          SAT
                        </S.CalendarDayMeta>
                      </S.CalendarWeek>
                    </S.CalendarTableHeader>
                    <S.CalendarTableBody>
                      {chunkedMatchedDays.map((week: Day[], idx: number) => (
                        <S.CalendarWeek key={idx}>
                          {week.map((day: Day, idx: number) => (
                            <S.CalendarDay key={idx}>
                              <S.Day
                                isSaturday={day.isSaturday}
                                isSunday={day.isSunday}
                                isThisMonth={day.isThisMonth}
                              >
                                {day.day.getDate()}
                              </S.Day>
                              <>
                                {day.events.map((event, idx) => (
                                  <S.EventBar
                                    key={idx}
                                    position={idx + 1}
                                    color={event.color}
                                  ></S.EventBar>
                                ))}
                              </>
                            </S.CalendarDay>
                          ))}
                        </S.CalendarWeek>
                      ))}
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
