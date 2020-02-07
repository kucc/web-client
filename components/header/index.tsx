import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Container>
        <S.LogoContainer>
          <S.LogoCat src="images/Logo-Cat-Black-Big.png" />
          <S.LogoWord src="images/Logo-Word-Black-Big.png" />
        </S.LogoContainer>
        <S.ButtonsContainer>
          <S.Button>About</S.Button>
          <S.Button>Portfolio</S.Button>
          <S.Button>Recrult</S.Button>
          <S.Button>Board</S.Button>
          <S.Button>Gallery</S.Button>
        </S.ButtonsContainer>
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
      </S.Container>
    </S.Header>
  );
};

export default Header;
