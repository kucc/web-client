import * as S from './styles';
import { useState } from 'react';

import Layout from '../../components/layout';

const Login: React.FC = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

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
                    autoComplete="off"
                    id="loginEmail"
                    placeholder="이메일"
                  />
                  <S.FormInput
                    autoComplete="off"
                    id="loginPassword"
                    placeholder="비밀번호"
                  />
                  <S.FormSendButton>로그인</S.FormSendButton>
                </S.FormInputContainer>
                <S.FormButtonContainer>
                  <S.FormButton>
                    <button>비밀번호 찾기</button>
                  </S.FormButton>
                  <S.FormButton>
                    <button onClick={handleFlip}>회원 가입</button>
                  </S.FormButton>
                </S.FormButtonContainer>
              </S.LoginFormContainer>
            </S.LoginFormFlipContainer>
            <S.SignUpFormFlipContainer flip={flip}>
              <S.SignUpFormContainer>
                <S.SignUpTitleContainer>
                  <div className="title">회원가입</div>
                </S.SignUpTitleContainer>
                <S.FormInputContainer>
                  <S.FormInput
                    autoComplete="off"
                    id="name"
                    placeholder="이름"
                  />
                  <S.FormInput
                    autoComplete="off"
                    id="email"
                    placeholder="이메일"
                  />
                  <S.FormInput
                    autoComplete="off"
                    id="password"
                    placeholder="비밀번호"
                  />
                  <S.FormInput
                    id="check-password"
                    autoComplete="off"
                    placeholder="비밀번호 확인"
                  />
                  <S.FormCheckInputContainer>
                    <input type="checkbox" id="check" />
                    <span>(필수) 개인정보 수집 이용동의</span>
                  </S.FormCheckInputContainer>
                </S.FormInputContainer>
                <S.SignUpFormSendButton>가입 하기</S.SignUpFormSendButton>
              </S.SignUpFormContainer>
            </S.SignUpFormFlipContainer>
          </S.FormContainer>
        </S.LoginContainer>
      </S.Login>
    </Layout>
  );
};

export default Login;
