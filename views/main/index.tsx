import { NextPage } from 'next';

import * as S from './styles';
import Link from 'next/link';
import { Grid, Row, Col } from '../../components/grid/styles';
import Layout from '../../components/layout';
import {
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
                    다른 이들과 나누고 싶어하는 사람들이 모인
                    동아리입니다!(예시)
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
                    style={{ boxShadow: '10px 10px 5px' }}
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
                            src="/images/Landing-main-1.jpg"
                            alt="Second slide"
                          />
                        </MDBView>
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId="3">
                        <MDBView>
                          <img
                            className="d-block w-100"
                            src="/images/Landing-main-1.jpg"
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
                          <S.CaptionTitle>Image_1</S.CaptionTitle>
                          <S.Caption>2020.xx.xx</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-2.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>Image_2</S.CaptionTitle>
                          <S.Caption>2020.xx.xx</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-3.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>Image_3</S.CaptionTitle>
                          <S.Caption>2020.xx.xx</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                    <Col>
                      <S.ImageGridContainer>
                        <S.ImageGrid src="/images/Landing-footage-4.jpg" />
                        <S.ImageGridCaption>
                          <S.CaptionTitle>Image_4</S.CaptionTitle>
                          <S.Caption>2020.xx.xx</S.Caption>
                        </S.ImageGridCaption>
                      </S.ImageGridContainer>
                    </Col>
                  </Row>
                </Grid>
              </S.Gallery>
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
        </S.Section>
        <S.RowSpace />
        <S.SectionGray>
          <Row>
            <Col>
              <Row>
                <S.Message>Features</S.Message>
              </Row>
              <Row>
                <S.Content>
                  심도 있는 학습/ 함께하는 개발 경험이
                  <br />
                  필요하신 분들께 같이 논의하거나
                  <br />
                  자습할 수 있는 환경을 만들어 드리기 위해
                  <br />
                  노력합니다.(예시)
                </S.Content>
              </Row>
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
        <S.Section>
          <S.KeywordSectionContainer>
            <Row>
              <Col>
                <S.KeywordContainer>
                  <S.KeywordIcon
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Square_definition.svg/1200px-Square_definition.svg.png"
                    onDragStart={handleOnDragStart}
                  />
                  <S.Keyword>Keyword_1</S.Keyword>
                  <S.KeywordCaption>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetuer adipiscing elit,
                    <br />
                    sed diam nonummy nibh
                    <br />
                    euismod tincidunt ut laoreet
                    <br />
                    dolore magna aliquam
                  </S.KeywordCaption>
                </S.KeywordContainer>
              </Col>
              <Col>
                <S.KeywordContainer>
                  <S.KeywordIcon
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Square_definition.svg/1200px-Square_definition.svg.png"
                    onDragStart={handleOnDragStart}
                  />
                  <S.Keyword>Keyword_2</S.Keyword>
                  <S.KeywordCaption>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetuer adipiscing elit,
                    <br />
                    sed diam nonummy nibh
                    <br />
                    euismod tincidunt ut laoreet
                    <br />
                    dolore magna aliquam
                  </S.KeywordCaption>
                </S.KeywordContainer>
              </Col>
              <Col>
                <S.KeywordContainer>
                  <S.KeywordIcon
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Square_definition.svg/1200px-Square_definition.svg.png"
                    onDragStart={handleOnDragStart}
                  />
                  <S.Keyword>Keyword_3</S.Keyword>
                  <S.KeywordCaption>
                    Lorem ipsum dolor sit amet,
                    <br />
                    consectetuer adipiscing elit,
                    <br />
                    sed diam nonummy nibh
                    <br />
                    euismod tincidunt ut laoreet
                    <br />
                    dolore magna aliquam
                  </S.KeywordCaption>
                </S.KeywordContainer>
              </Col>
            </Row>
          </S.KeywordSectionContainer>
        </S.Section>
        <S.RowSpace />
        <S.RowSpace />
        <S.Section>
          <S.ButtonContainer>
            <Link href="/recruit">
              <S.JoinButton>Join Us!</S.JoinButton>
            </Link>
          </S.ButtonContainer>
        </S.Section>
      </Grid>
      <S.RowSpace />
    </S.Main>
  </Layout>
);

export default Main;
