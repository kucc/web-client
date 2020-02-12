import * as S from './styles';
import { Grid, Row, Col } from '../../components/grid/styles';
const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <Grid>
          <Row height="8rem">
            <Col span={6} offset={2}>
              <S.DescriptionContainer>
                {/* prettier-ignore */}
                <S.DescriptionLineContainer>
                  <span style={{marginRight:"1rem", fontWeight:"bold"}}>연락처</span><span style={{marginRight:"4rem"}}>010-0000-0000</span>
                  <span style={{marginRight:"1rem", fontWeight:"bold"}}>주소</span><span>서울특별시 성북구 안암동5가 1-13, 314호
                  </span>
                </S.DescriptionLineContainer>
                <S.DescriptionLineContainer>
                  Made with ❤️ of KUCC Members :)
                </S.DescriptionLineContainer>
              </S.DescriptionContainer>
            </Col>
            <Col span={2}>
              <S.LogoContainer>
                <S.LogoImg src="images/main_logo.png" alt="FooterLogo" />
              </S.LogoContainer>
            </Col>
          </Row>
        </Grid>
      </S.FooterContainer>
    </S.Footer>
  );
};

export default Footer;
