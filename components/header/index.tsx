import * as S from './styles';
import { Grid, Row, Col } from '../../components/grid/styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <Grid>
          <Row height="6rem">
            <Col span={2}>
              <S.LogoContainer>
                <S.LogoImg src="images/main_logo.png" alt="Logo" />
              </S.LogoContainer>
            </Col>
            <Col span={6} offset={1}>
              <S.MenuContainer>
                <S.MenuItem>About</S.MenuItem>
                <S.MenuItem>Portfolio</S.MenuItem>
                <S.MenuItem>Recrult</S.MenuItem>
                <S.MenuItem>Board</S.MenuItem>
                <S.MenuItem>Gallery</S.MenuItem>
              </S.MenuContainer>
            </Col>
            <Col span={2} offset={1}>
              <S.ProfileContainer>
                <S.ProfileIcon>
                  <div className="circle" />
                </S.ProfileIcon>
                <S.ProfileIcon>
                  <div className="circle" />
                </S.ProfileIcon>
                <S.ProfileAvatar>
                  <img src="images/Avatar-Black-Dummy.png" />
                </S.ProfileAvatar>
              </S.ProfileContainer>
            </Col>
          </Row>
          {/* 

        <S.ProfileContainer>
          <S.ProfileIcon>
            <div className="circle" />
          </S.ProfileIcon>
          <S.ProfileIcon>
            <div className="circle" />
          </S.ProfileIcon>
          <S.ProfileAvatar>
            <img src="images/Avatar-Black-Dummy.png" />
          </S.ProfileAvatar>
        </S.ProfileContainer> */}
        </Grid>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
