import Link from 'next/link';
import * as S from './styles';

import { useUser } from '../../context/user';
import { Grid, Row, Col } from '../../components/grid/styles';

const Header: React.FC = () => {
  const user = useUser();

  return (
    <S.Header>
      <S.HeaderContainer>
        <Grid>
          <Row height="6rem">
            <Col span={2}>
              <Link href="/">
                <S.LogoContainer>
                  <S.LogoImg src="images/Main-Logo.png" alt="HeaderLogo" />
                </S.LogoContainer>
              </Link>
            </Col>
            <Col span={6} offset={1}>
              <S.MenuContainer>
                <S.MenuItem>About</S.MenuItem>
                <S.MenuItem>Portfolio</S.MenuItem>
                <S.MenuItem>Recrult</S.MenuItem>
                <Link href="/board">
                  <S.MenuItem>Board</S.MenuItem>
                </Link>
                <S.MenuItem>Gallery</S.MenuItem>
              </S.MenuContainer>
            </Col>
            <Col span={2} offset={1}>
              {user ? (
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
              ) : (
                <Link href="login">
                  <S.LoginButton>로그인</S.LoginButton>
                </Link>
              )}
            </Col>
          </Row>
        </Grid>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
