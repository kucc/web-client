import { NextPage } from 'next';

import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';

const Calendar: NextPage = () => {
  return (
    <Layout>
      <S.Calendar>
        <Grid>
          <Row>
            <S.CalendarContainer>
              <Col span={12}>
                <S.CalendarMenu>
                  <S.CalendarMenuTitle>캘린더</S.CalendarMenuTitle>
                  <S.CalendarMenuHistory>Home > Calendar</S.CalendarMenuHistory>
                </S.CalendarMenu>
              </Col>
            </S.CalendarContainer>
          </Row>
        </Grid>
      </S.Calendar>
    </Layout>
  );
};

export default Calendar;
