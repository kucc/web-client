import styled from 'styled-components';

interface FlipProps {
  flip: boolean;
}

export const Login = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const LoginContainer = styled.div`
  width: 74rem;
  height: 45rem;

  display: flex;
`;

export const LoginLogoContainer = styled.div`
  width: 37rem;
  height: 45rem;
  background-color: black;

  display: flex;

  justify-content: center;
  align-items: center;

  border-radius: 3rem 0rem 0rem 3rem;
`;

export const LoginLogoCircle = styled.div`
  width: 26rem;
  height: 26rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 50%;
`;

export const LoginLogo = styled.img`
  width: 16rem;
  height: 8rem;
`;

export const FormContainer = styled.div`
  width: 37rem;
  height: 45rem;
  background-color: white;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0rem 3rem 3rem 0rem;
  background-color: #e1e1e1;
`;

export const LoginFormFlipContainer = styled.div<FlipProps>`
  width: 33rem;
  height: 41rem;
  position: absolute;

  z-index: 900;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.5s ease-in-out;
  transform-origin: center center;
  transform: ${props => (props.flip ? `rotateY(180deg)` : `rotateY(0deg)`)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PasswordChangeFormFlipContainer = styled.div<FlipProps>`
  width: 33rem;
  height: 41rem;
  position: absolute;

  z-index: ${props => (props.flip ? 1000 : 800)};
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transition: all 0.5s ease-in-out;
  transform-origin: center center;
  transform: ${props => (props.flip ? `rotateY(0deg)` : `rotateY(180deg)`)};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginFormContainer = styled.div`
  width: 26rem;
  height: 34rem;

  color: white;
`;

export const PasswordChangeFormContainer = styled.div`
  width: 26rem;
  height: 34rem;
`;

export const FormTitleContainer = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  font-size: 2.4rem;
  font-weight: bold;

  margin-bottom: 5rem;

  .kucc {
    color: #cc464f;
  }

  .title {
    margin-left: 1rem;
    color: black;
  }
`;

export const PasswordChangeTitleContainer = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2.4rem;
  font-weight: bold;

  margin-bottom: 3rem;

  .title {
    margin-left: 1rem;
    color: black;
  }

  button {
    width: 4rem;
    height: 4rem;
    border: none;
    background-color: inherit;
  }
`;

export const FormInputContainer = styled.div``;

export const FormInput = styled.input`
  width: 26rem;
  height: 3.3rem;
  background-color: white;

  font-size: 1.5rem;

  border: 1px solid #707070;
  border-radius: 1.7rem;

  margin-bottom: 1.6rem;
  padding: 0.8rem 3rem;

  &::placeholder {
    font-family: 'NanumSquare';
  }
`;

export const FormCheckInputContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  input {
    width: 1.6rem;
  }

  span {
    font-size: 1.4rem;
  }
`;

export const FormSendButton = styled.button`
  width: 26rem;
  height: 3.3rem;
  background-color: #c93333;

  font-size: 1.5rem;
  text-align: center;
  color: white;

  border: none;
  border-radius: 1.7rem;

  margin-top: 4.3rem;

  &:disabled {
    background-color: gray;
  }
`;

export const PasswordChangeFormSendButton = styled.button`
  width: 26rem;
  height: 3.3rem;
  background-color: #c93333;

  font-size: 1.5rem;
  text-align: center;
  color: white;

  border: none;
  border-radius: 1.7rem;

  margin-top: 1.7rem;

  &:disabled {
    background-color: gray;
  }
`;

export const FormButtonContainer = styled.div`
  height: 5rem;

  margin-top: 1.5rem;
  border-top: 1px solid #707070;
  padding: 0rem 1rem 0rem 1rem;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const FormButton = styled.div`
  width: 9rem;
  height: 5rem;
  margin-top: 1px; /* 경계 부분이 자꾸 가려져서 추가함 (리팩토링 필요) */

  text-align: center;
  color: #707070;
  background-color: #e1e1e1;

  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  button {
    border: none;
    font-size: 1.4rem;
    letter-spacing: -0.42px;
    border-radius: 1rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #eeeeee;
    }
  }
`;
