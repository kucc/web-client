import { NextPage } from 'next';

import * as S from './styles';
import Link from 'next/link';
import { Grid, Row, Col } from '../../components/grid/styles';
import Layout from '../../components/layout';
import {
  MDBAnimation,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from 'mdbreact';
import Carousel, { Dots } from '@brainhubeu/react-carousel';

const handleOnDragStart = e => e.preventDefault();

const Main: NextPage = () => (
  <Layout>
    <S.Main>
      <Grid>
        <S.Section>
          <Row>
            <Col>
              <S.SectionText>
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
                    다른 이들과 나누고 싶은 사람들이 모인 동아리입니다!
                  </S.TitleContent>
                </Row>
              </S.SectionText>
            </Col>
            <Col>
              <S.CarouselContainer>
                <MDBContainer>
                  <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    slide
                    interval={3000}
                    style={{ boxShadow: 'rgba(0,0,0,0.3) 10px 10px 5px' }}
                  >
                    <MDBCarouselInner>
                      <MDBCarouselItem itemId="1">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src="/images/Landing-main-1.jpg"
                            alt="First slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="2">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src="/images/Landing-main-2.jpg"
                            alt="Second slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src="/images/Landing-main-3.jpg"
                            alt="Third slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                    </MDBCarouselInner>
                  </MDBCarousel>
                </MDBContainer>
                {/* <div style={{ height: '50rem' }}>carousel</div> */}
                {/* <S.Image src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" /> */}
              </S.CarouselContainer>
            </Col>
          </Row>
        </S.Section>
        <S.RowSpace />
        <S.RowSpace />
        <S.Section>
          <S.Decoration1 />
          <S.Decoration2 />
          <S.Decoration3 />
          <S.Decoration4 />
          <S.Decoration5 />
          <Row>
            <Col>
              <S.Gallery>
                <Grid>
                  <Row>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-1.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>홈페이지 제작 회의</S.CaptionTitle>
                          <S.Caption>2020.02.15</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-2.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>20-1 운영진 회의</S.CaptionTitle>
                          <S.Caption>2020.02.02</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-3.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>20-1 운영진 LT</S.CaptionTitle>
                          <S.Caption>2020.02.01</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-4.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>동아리 로고 제작</S.CaptionTitle>
                          <S.Caption>2020.02.08</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                  </Row>
                </Grid>
              </S.Gallery>
            </Col>
            <Col>
              <MDBAnimation type="fadeInRight" reveal>
                <Row>
                  <S.Message>Feature</S.Message>
                </Row>
                <Row>
                  <S.Content>
                    KUCC는 다양한 관심사를 가진 동아리원들과
                    <br />
                    자발적으로 모여 공부하고, 서로 가르치는 등
                    <br />
                    지식을 나누며 함께 성장하고 있습니다.
                  </S.Content>
                </Row>
              </MDBAnimation>
            </Col>
          </Row>
        </S.Section>
        <S.RowSpace />
        <S.SectionGray>
          <Row>
            <Col>
              <MDBAnimation type="fadeInLeft" reveal>
                <Row>
                  <S.Message>Activity</S.Message>
                </Row>
                <Row>
                  <S.Content>
                    KUCC는 개발경험이 있는 분들께는
                    <br />
                    더욱 심도있는 학습을 할 수 있는 기회를,
                    <br />
                    초심자분들께는 컴퓨터 분야에
                    <br />
                    쉽게 입문할 수 있도록 돕는 환경을 제공합니다.
                  </S.Content>
                </Row>
              </MDBAnimation>
            </Col>
            <Col>
              <S.LeafCarouselContainer>
                <Carousel
                  clickToChange
                  slidesPerPage={2.5}
                  infinite
                  /* stopAutoPlayOnHover */
                  autoPlay={3000}
                >
                  <S.Image src="/images/Landing-feature-1.jpg" />
                  <S.Image src="/images/Landing-feature-2.jpg" />
                  <S.Image src="/images/Landing-feature-3.jpg" />
                  <S.Image src="/images/Landing-feature-4.jpg" />
                  <S.Image src="/images/Landing-feature-5.jpg" />
                  <S.Image src="/images/Landing-feature-6.jpg" />
                </Carousel>
              </S.LeafCarouselContainer>
              {/* <div style={{ height: '50rem' }}>carousel</div> */}
            </Col>
          </Row>
        </S.SectionGray>
        <S.RowSpace />
        <MDBAnimation type="fadeInUp" reveal>
          <S.Section>
            <S.KeywordSectionContainer>
              <Row>
                <Col>
                  <S.KeywordContainer>
                    <S.KeywordIcon
                      src="/images/Landing-Keyword1.png"
                      onDragStart={handleOnDragStart}
                    />
                    <S.Keyword>Study</S.Keyword>
                    <S.KeywordCaption>
                      매 학기 20여개에 이르는 스터디와 세션을 통해 서로 가르치고
                      배우며 여러 분야에 대한 지식을 넓힐 수 있습니다.
                    </S.KeywordCaption>
                  </S.KeywordContainer>
                </Col>
                <Col>
                  <S.KeywordContainer>
                    <S.KeywordIcon
                      src="/images/Landing-Keyword2.png"
                      onDragStart={handleOnDragStart}
                    />
                    <S.Keyword>Project</S.Keyword>
                    <S.KeywordCaption>
                      팀을 꾸려 대회에 나가거나, 프로젝트를 통해 결과물을
                      만들어내는 활동이 활발하게 이어지고 있습니다.
                    </S.KeywordCaption>
                  </S.KeywordContainer>
                </Col>
                <Col>
                  <S.KeywordContainer>
                    <S.KeywordIcon
                      src="/images/Landing-Keyword3.png"
                      onDragStart={handleOnDragStart}
                    />
                    <S.Keyword>Social</S.Keyword>
                    <S.KeywordCaption>
                      컴퓨터라는 같은 관심사를 가진 사람들끼리 모여 소통하고,
                      다양한 친목활동을 통해 화목한 동아리 생활을 즐길 수
                      있습니다.
                    </S.KeywordCaption>
                  </S.KeywordContainer>
                </Col>
              </Row>
            </S.KeywordSectionContainer>
          </S.Section>
        </MDBAnimation>
        <S.RowSpace />
        <S.RowSpace />
        <MDBAnimation type="fadeInUp" reveal>
          <S.Section>
            <S.ButtonContainer>
              <Link href="/recruit">
                <S.JoinButton>Join Us!</S.JoinButton>
              </Link>
            </S.ButtonContainer>
          </S.Section>
        </MDBAnimation>
      </Grid>
      <S.RowSpace />
    </S.Main>
  </Layout>
);

export default Main;
