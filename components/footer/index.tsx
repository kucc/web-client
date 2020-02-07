import * as S from './styles';

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.DescriptionContainer>
          <S.DescriptionLineContainer>
            이부분 너무 어려워
          </S.DescriptionLineContainer>
          <S.DescriptionLineContainer>
            디자인 고민좀 해봅시다
          </S.DescriptionLineContainer>
        </S.DescriptionContainer>
        <S.LogoContainer>
          <S.LogoCat src="images/Footer-Cat-Black-Big.png" />
          <S.LogoWord src="images/Logo-Word-White-Big.png" />
        </S.LogoContainer>
      </S.Container>
    </S.Footer>
  );
};

export default Footer;
