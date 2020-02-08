import * as S from './styles';
import Layout from '../../components/layout';

const Login: React.FC = () => {
  return (
    <Layout>
      <S.Login>
        <S.LoginContainer>
          <S.LoginLogoContainer>
            <S.LoginLogoCircle>
              <S.LoginLogo src="images/Logo-Word-Black-Big.png"></S.LoginLogo>
            </S.LoginLogoCircle>
          </S.LoginLogoContainer>
          <S.FormContainer>
            <S.LoginFormContainer>
              <S.FormTitleContainer>
                <div className="kucc">KUCC</div>
                <div className="title">로그인</div>
              </S.FormTitleContainer>
              <S.FormInputContainer></S.FormInputContainer>
              <S.FormButtonContainer></S.FormButtonContainer>
            </S.LoginFormContainer>
          </S.FormContainer>
        </S.LoginContainer>
      </S.Login>
    </Layout>
  );
};

export default Login;
