import { NextPage } from 'next';

import * as S from './styles';
import Layout from '../../components/layout';
import { Grid, Row, Col } from '../../components/grid/styles';

import PortfolioNavigation from '../../components/portfolio-navigation';

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <S.Portfolio>
        <Grid>
          <Row>
            <S.PortfolioContainer>
              <Col span={2}>
                <S.PortfolioNavBar>
                  <PortfolioNavigation />
                </S.PortfolioNavBar>
              </Col>
              <Col span={10}>
                <S.PortfolioMenu>
                  <S.PortfolioMenuTitle>포트폴리오</S.PortfolioMenuTitle>
                  <S.PortfolioMenuHistory>
                    Home > Portfolio
                  </S.PortfolioMenuHistory>
                </S.PortfolioMenu>
                <S.PortfolioContent>
                  {/* <S.Slider bullets={false} animation="scaleOutAnimation">
                    <S.SliderContentWrapper>
                      <S.SliderContentBackground backgroundColor="#F7D9CD">
                        인생
                      </S.SliderContentBackground>
                    </S.SliderContentWrapper>
                    <S.SliderContentWrapper>
                      f
                      <S.SliderContentBackground backgroundColor="#C6F0FF">
                        사람은 지쳐 쓰러질 때 까지 일해야 한다 - 박지성 -
                      </S.SliderContentBackground>
                    </S.SliderContentWrapper>
                    <S.SliderContentWrapper>
                      <S.SliderContentBackground backgroundColor="#ECECB0">
                        이런느낌어때?
                      </S.SliderContentBackground>
                    </S.SliderContentWrapper>
                  </S.Slider> */}
                </S.PortfolioContent>
              </Col>
            </S.PortfolioContainer>
          </Row>
        </Grid>
      </S.Portfolio>
    </Layout>
  );
};

export default Portfolio;
