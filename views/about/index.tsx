import { NextPage } from 'next';
import { Grid, Row, Col } from '../../components/grid/styles';
import * as S from './styles';
import Layout from '../../components/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Grid>
        <S.IntroductionSection>
          <Row>
            <Col span={10} offset={1}>
              <S.Introduction>
                <div className="figure">
                  <S.IntroductionMessage>
                    <S.IntroductionTitle>We Code Together;</S.IntroductionTitle>
                    <S.IntroductionContentContainer>
                      <S.IntroductionContent>
                        코드만 꼭 짜는건 아니고
                        <br /> <br />
                        술도 많이 먹고 게임도 좋아합니다
                        <br /> <br />
                        공부할 땐 열심히 공부해요!
                        <br /> <br /> 나이 성별 학과 무관 다 환영!
                      </S.IntroductionContent>
                    </S.IntroductionContentContainer>
                  </S.IntroductionMessage>
                </div>
              </S.Introduction>
            </Col>
          </Row>
        </S.IntroductionSection>
        {/**소개 */}

        <S.KuccSection>
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
                <S.Title>고려대's KUCC</S.Title>
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
                <S.Text>우리는 함께 코딩한다</S.Text>
              </S.TextContainer>
            </Col>
          </Row>
          {/*WeCodeTogether */}
        </S.KuccSection>
        <S.PresidentSection>
          <Row>
            <Col span={5} offset={1}>
              <S.PresidentPicture src="images/About-President'sComment-Big.jpg"></S.PresidentPicture>
            </Col>
            <Col span={5} offset={1}>
              <S.PresidentCommentTitle>
                President's Comment
              </S.PresidentCommentTitle>
              <S.PresidentCommentContainer>
                <S.PresidentComment>
                  "쿠씨씨는 인큐베이터이다(Incubator)"
                </S.PresidentComment>
                <S.PresidentComment>
                  "서로 뭉쳐서 돕고 성장하는 동아리"
                </S.PresidentComment>
              </S.PresidentCommentContainer>
            </Col>
          </Row>
        </S.PresidentSection>
        {/*President's Comment */}
        <S.ExecutiveSection>
          <Row>
            <Col span={5} offset={1}>
              <S.ExecutivesTitle>Executive's</S.ExecutivesTitle>
              <Row>
                <S.ExecutivesCommentContainer>
                  <div className="content">"강화된 스터디와 세션!"</div>
                  <div className="name">기술교육부 부서장</div>
                </S.ExecutivesCommentContainer>
              </Row>
              <Row>
                <S.ExecutivesCommentContainer>
                  <div className="content">"투명한 재정관리!"</div>
                  <div className="name">운영부 부서장</div>
                </S.ExecutivesCommentContainer>
              </Row>
              <Row>
                <S.ExecutivesCommentContainer>
                  <div className="content">"하나로 뭉친 KUCC!"</div>
                  <div className="name">친목부 부서장</div>
                </S.ExecutivesCommentContainer>
              </Row>
              <Row>
                <S.ExecutivesCommentContainer>
                  <div className="content">"어서 지원하세요!"</div>
                  <div className="name">홍보부 부서장</div>
                </S.ExecutivesCommentContainer>
              </Row>
            </Col>
            <Col span={5}>
              <S.ExecutivesPicture src="./images/About-Executives-Big.jpg"></S.ExecutivesPicture>
            </Col>
            <Col span={1}>
              <S.ExecutivesColor></S.ExecutivesColor>
            </Col>
          </Row>

          {/*Executives */}
        </S.ExecutiveSection>

        <S.KeywordSection>
          <Row>
            <Col span={4}>
              <S.KeyWord>
                <S.KeyWordPic1>
                  <div className="figure">
                    <S.KeyWordTitle>Build</S.KeyWordTitle>
                  </div>
                </S.KeyWordPic1>
              </S.KeyWord>
            </Col>
            <Col span={4}>
              <S.KeyWord>
                <S.KeyWordPic2>
                  <div className="figure">
                    <S.KeyWordTitle>Connect</S.KeyWordTitle>
                  </div>
                </S.KeyWordPic2>
              </S.KeyWord>
            </Col>
            <Col span={4}>
              <S.KeyWord>
                <S.KeyWordPic3>
                  <div className="figure">
                    <S.KeyWordTitle>Grow</S.KeyWordTitle>
                  </div>
                </S.KeyWordPic3>
              </S.KeyWord>
            </Col>
          </Row>

          <Row>
            <Col span={4}>
              <S.KeyWord>
                <S.KeyWordExpl>모여서 함께 코딩해나가는 동아리</S.KeyWordExpl>
              </S.KeyWord>
            </Col>
            <Col span={4}>
              <S.KeyWord>
                <S.KeyWordExpl>
                  다양한 사람들이 섞여서 소통하는 동아리
                </S.KeyWordExpl>
              </S.KeyWord>
            </Col>
            <Col span={4}>
              <S.KeyWord>
                <S.KeyWordExpl>함께 고민하고 배워나가는 동아리</S.KeyWordExpl>
              </S.KeyWord>
            </Col>
          </Row>
        </S.KeywordSection>

        <S.ContactSection>
          <Row>
            <Col span={6}>
              <S.ContactInfoContainer>
                <S.ContactTitle>Contact</S.ContactTitle>
                <S.ContactInfo>
                  <div className="title">찾아오시는 길</div>
                  <div className="content">고려대 학생회관 314호</div>
                </S.ContactInfo>
                <S.ContactInfo>
                  <div className="title">문의처</div>
                  <div className="content">
                    박지수 / 010. 0000. 0000
                    <br />
                    <br />
                    김현채 / 010. 0000. 0000
                  </div>
                </S.ContactInfo>
              </S.ContactInfoContainer>
            </Col>
            <Col span={6}>
              <S.ContactMapContainer>
                <S.ContactMap></S.ContactMap>
                <S.RedBox></S.RedBox>
              </S.ContactMapContainer>
            </Col>
          </Row>
        </S.ContactSection>
      </Grid>
    </Layout>
  );
};

export default About;
