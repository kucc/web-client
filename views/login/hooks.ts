import { useState } from 'react';
import { useRouter } from 'next/router';

import { LoginForm } from './model/login-form';

export const useFlip = () => {
  const [flip, setFlip] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  return {
    flip,
    handleFlip,
  };
};

export const useLogin = () => {
  const [loginForm, setLoginForm] = useState(new LoginForm('', ''));

  const handleFormChange = e => {
    setLoginForm({
      ...loginForm,
      [e.target.id]: e.target.value,
    });
  };

  const isLoginButtonDisabled = !(loginForm.email && loginForm.password);
  const router = useRouter();

  const handleLoginButton = async e => {
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    });

    if (response.ok) {
      window.location.replace('/');
      return;
    }

    window.alert('로그인에 실패하였습니다.');
  };

  return {
    loginForm,
    handleFormChange,
    handleLoginButton,
    isLoginButtonDisabled,
  };
};

export const useFindPassword = () => {};
