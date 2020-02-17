import { NextPage } from 'next';
import { Grid, Row, Col } from '../../components/grid/styles';
import * as S from './styles';
import Layout from '../../components/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Grid>
        <S.RowContainer>
          <Row>
            <Col span={10} offset={1}>
              <S.Introduction>
                <S.IntroductionMessage>
                  <S.IntroductionTitle>We Code Together;</S.IntroductionTitle>
                  <S.IntroductionContentContainer>
                    <S.IntroductionContent>
                      코드만 꼭 짜는건 아니고
                      <br /> 술도 많이 먹고 게임도 좋아합니다
                      <br />
                      어서 지원하세요
                      <br /> ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
                    </S.IntroductionContent>
                  </S.IntroductionContentContainer>
                </S.IntroductionMessage>
              </S.Introduction>
            </Col>
          </Row>
        </S.RowContainer>
        {/**소개 */}
        <S.RowContainer>
          <S.RowContainerSmall>
            <Row>
              <Col span={2}>
                <S.LeftCircleContainer>
                  <S.Circle>
                    <S.CircleWords>
                      Since
                      <br />
                      1973
                    </S.CircleWords>
                  </S.Circle>
                </S.LeftCircleContainer>
              </Col>
              <Col span={2}>
                <S.LineContainer>
                  <S.Line></S.Line>
                </S.LineContainer>
              </Col>
              <Col span={4}>
                <S.TitleContainer>
                  <S.Title>XX's KUCC</S.Title>
                </S.TitleContainer>
              </Col>
              <Col span={2}>
                <S.ArrowContainer>
                  <S.Arrow></S.Arrow>
                </S.ArrowContainer>
              </Col>
              <Col span={2}>
                <S.RightCircleContainer>
                  <S.Circle>
                    <S.CircleWords></S.CircleWords>
                  </S.Circle>
                </S.RightCircleContainer>
              </Col>
            </Row>
            {/*XX'S KUCC */}
            <Row>
              <Col span={4} offset={4}>
                <S.TextContainer>
                  <S.Text>We Code Together;(예시)</S.Text>
                </S.TextContainer>
              </Col>
            </Row>
            {/*WeCodeTogether */}
          </S.RowContainerSmall>
          <S.RowContainerSmall>
            <Row>
              <Col span={5} offset={1}>
                <S.PresidentPicture src="images/About-President'sComment-Big.png"></S.PresidentPicture>
              </Col>
              <Col span={5} offset={1}>
                <S.PresidentCommentTitle>
                  President's Comment
                </S.PresidentCommentTitle>
                <S.PresidentCommentContainer>
                  <S.PresidentComment>"KUCC는 초심자 분들이</S.PresidentComment>
                  <S.PresidentComment>"KUCC는 초심자 분들이</S.PresidentComment>
                </S.PresidentCommentContainer>
              </Col>
            </Row>
            {/*President's Comment */}
          </S.RowContainerSmall>
          <S.ExecutivesContainer>
            <Row>
              <Col span={5} offset={1}>
                <S.ExecutivesTitle>Executive's</S.ExecutivesTitle>
                <Row>
                  <S.ExecutivesCommentContainer>
                    <div className="content">"KUCC는 초심자 분들이"</div>
                    <div className="name">000</div>
                  </S.ExecutivesCommentContainer>
                </Row>
                <Row>
                  <S.ExecutivesCommentContainer>
                    <div className="content">"KUCC는 초심자 분들이"</div>
                    <div className="name">000</div>
                  </S.ExecutivesCommentContainer>
                </Row>
                <Row>
                  <S.ExecutivesCommentContainer>
                    <div className="content">"KUCC는 초심자 분들이"</div>
                    <div className="name">000</div>
                  </S.ExecutivesCommentContainer>
                </Row>
                <Row>
                  <S.ExecutivesCommentContainer>
                    <div className="content">"KUCC는 초심자 분들이"</div>
                    <div className="name">000</div>
                  </S.ExecutivesCommentContainer>
                </Row>
              </Col>
              <Col span={5}>
                <S.ExecutivesPicture src="images/About-Executives-Big.png"></S.ExecutivesPicture>
              </Col>
              <Col span={1}></Col>
            </Row>
          </S.ExecutivesContainer>
          {/*Executives */}
        </S.RowContainer>
      </Grid>
    </Layout>
  );
};

export default About;
