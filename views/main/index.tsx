import { NextPage } from 'next';

import * as S from './styles';
import { Grid, Row, Col } from '../../components/grid/styles';
import Layout from '../../components/layout';

const Main: NextPage = () => (
  <Layout>
    <S.Main>
      <Grid>
        <S.Section1>
          <Row>
            <Col>
              <Row>
                <S.MiniFeatureContainer>
                  <S.MiniFeature>Assemble</S.MiniFeature>
                  <S.MiniFeature>Scrum</S.MiniFeature>
                  <S.MiniFeature>Develop</S.MiniFeature>
                  <S.MiniFeature>Further</S.MiniFeature>
                </S.MiniFeatureContainer>
              </Row>
              <Row>
                <S.TitleMessage>
                  We Code;
                  <br />
                  Together
                </S.TitleMessage>
              </Row>
              <Row>
                <S.TitleContent>
                  고려대학교 중앙 컴퓨터 동아리 KUCC는
                  <br />
                  컴퓨터에 관심이 있고, 더 알고 싶고,
                  <br />
                  다른 이들과 나누고 싶어하는 사람들이 모인 동아리입니다!(예시)
                </S.TitleContent>
              </Row>
            </Col>
            <Col>
              <S.ImgContainer>
                <S.Image src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" />
              </S.ImgContainer>
            </Col>
          </Row>
        </S.Section1>
        <S.RowSpace />
        <S.Section2>
          <Row>
            <Col>
              <Grid>
                <Row>
                  <Col>
                    <S.ImageGrid src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" />
                  </Col>
                  <Col>
                    <S.ImageGrid src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <S.ImageGrid src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" />
                  </Col>
                  <Col>
                    <S.ImageGrid src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" />
                  </Col>
                </Row>
              </Grid>
            </Col>
            <Col>
              <Row>
                <S.Message>Footage</S.Message>
              </Row>
              <Row>
                <S.Content>
                  KUCC는 초심자 분들이
                  <br /> 프로그래밍에 진입하는 문턱을 <br />
                  낮추기 위해 노력합니다.(예시)
                </S.Content>
              </Row>
            </Col>
          </Row>
        </S.Section2>
        <S.RowSpace />
        <S.Section3>
          <Row>
            <Col>
              <Row>
                <S.Message>Footage</S.Message>
              </Row>
              <Row>
                <S.Content>
                  KUCC는 초심자 분들이
                  <br /> 프로그래밍에 진입하는 문턱을 <br />
                  낮추기 위해 노력합니다.(예시)
                </S.Content>
              </Row>
            </Col>
            <Col></Col>
          </Row>
        </S.Section3>
      </Grid>
    </S.Main>
  </Layout>
);

export default Main;
