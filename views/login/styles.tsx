import styled from 'styled-components';

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
  background-color: whitesmoke;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0rem 3rem 3rem 0rem;
`;

export const LoginFormContainer = styled.div`
  width: 26rem;
  height: 34rem;
  color: white;

  background-color: #123456;
`;

export const SignUpFormContainer = styled.div`
  width: 26rem;
  height: 34rem;
`;

export const FormTitleContainer = styled.div`
  height: 5rem;

  display: flex;
  align-items: center;
  font-size: 2.4rem;

  .kucc {
    color: #cc464f;
  }

  .title {
    margin-left: 1rem;
    color: black;
  }
`;

export const FormExitButton = styled.button``;

export const FormInputContainer = styled.div``;
export const FormButtonContainer = styled.div``;

export const FormInput = styled.input`
  width: 26rem;
  height: 3.3rem;
  background-color: white;

  font-size: 1.5rem;

  border: 1px solid #707070;
`;
