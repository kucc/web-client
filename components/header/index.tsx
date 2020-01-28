import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.LogoCharacter />
      <S.LogoMessage />
      <S.MenuItem>About</S.MenuItem>
      <S.MenuDivider>|</S.MenuDivider>
      <S.MenuItem>Portfolio</S.MenuItem>
      <S.MenuDivider>|</S.MenuDivider>
      <S.MenuItem>Recrult</S.MenuItem>
      <S.MenuDivider>|</S.MenuDivider>
      <S.MenuItem>Board</S.MenuItem>
      <S.MenuDivider>|</S.MenuDivider>
      <S.MenuItem>Gallery</S.MenuItem>
      <S.Profile>
        <S.ProfileButtons>
          <S.ProfileButton />
          <S.ProfileButton />
        </S.ProfileButtons>
        <S.ProfileImage />
      </S.Profile>
    </S.Header>
  );
};

export default Header;
