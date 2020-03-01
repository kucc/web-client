import * as S from './styles';
import { NextPage } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { redirect } from '../../lib/auth';
import Layout from '../../components/layout';
import { useFlip, useLogin, useFindPassword } from './hooks';

const Login: NextPage = () => {
  const { flip, handleFlip } = useFlip();
  const {
    loginForm,
    handleFormChange,
    handleLoginButton,
    isLoginButtonDisabled,
  } = useLogin();

  const {
    isFormSent,
    findPasswordForm,
    handleSendPasswordForm,
    isFindPasswordButtonDisabled,
    handleFindPasswordFormChange,
  } = useFindPassword();

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
            <S.LoginFormFlipContainer flip={flip}>
              <S.LoginFormContainer>
                <S.FormTitleContainer>
                  <div className="kucc">KUCC</div>
                  <div className="title">로그인</div>
                </S.FormTitleContainer>
                <S.FormInputContainer>
                  <S.FormInput
                    id="email"
                    value={loginForm.email}
                    placeholder="이메일"
                    onChange={handleFormChange}
                  />
                  <S.FormInput
                    autoComplete="off"
                    type="password"
                    id="password"
                    value={loginForm.password}
                    placeholder="비밀번호"
                    onChange={handleFormChange}
                  />
                  <S.FormSendButton
                    onClick={handleLoginButton}
                    disabled={isLoginButtonDisabled}
                  >
                    로그인
                  </S.FormSendButton>
                </S.FormInputContainer>
                <S.FormButtonContainer>
                  <S.FormButton>
                    <button onClick={handleFlip}>비밀번호 찾기</button>
                  </S.FormButton>
                  <S.FormButton>
                    <button>회원 가입</button>
                  </S.FormButton>
                </S.FormButtonContainer>
              </S.LoginFormContainer>
            </S.LoginFormFlipContainer>
            <S.PasswordChangeFormFlipContainer flip={flip}>
              <S.PasswordChangeFormContainer>
                <S.PasswordChangeTitleContainer>
                  <div className="title">비밀번호 찾기</div>
                  <button onClick={handleFlip}>
                    <FontAwesomeIcon icon={faChevronLeft} size="2x" />
                  </button>
                </S.PasswordChangeTitleContainer>
                <S.FormInputContainer>
                  <S.FormInput
                    autoComplete="off"
                    name="name"
                    placeholder="이름"
                    value={findPasswordForm.name}
                    onChange={handleFindPasswordFormChange}
                  />
                  <S.FormInput
                    autoComplete="off"
                    name="email"
                    placeholder="이메일"
                    value={findPasswordForm.email}
                    onChange={handleFindPasswordFormChange}
                  />
                </S.FormInputContainer>
                <S.FormSentContainer>보내졌음!</S.FormSentContainer>
                <S.FormSendButton
                  disabled={isFindPasswordButtonDisabled}
                  onClick={handleSendPasswordForm}
                >
                  인증메일 전송
                </S.FormSendButton>
              </S.PasswordChangeFormContainer>
            </S.PasswordChangeFormFlipContainer>
          </S.FormContainer>
        </S.LoginContainer>
      </S.Login>
    </Layout>
  );
};

Login.getInitialProps = ({ req, res, isLoggedIn, ...rest }) => {
  if (isLoggedIn) {
    redirect(res, '/');
  }
  return {
    rest,
  };
};

export default Login;
