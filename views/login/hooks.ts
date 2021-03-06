import { useState } from 'react';

import { LoginForm } from './model/login-form';
import FindPasswordForm from './model/find-password-form';

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
      [e.target.id]: e.target.value.trim(),
    });
  };

  const isLoginButtonDisabled = !(loginForm.email && loginForm.password);

  const handleLoginButton = async e => {
    const response = await fetch('http://localhost:4000/api/auth/login', {
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

export const useFindPassword = () => {
  const [findPasswordForm, setFindPasswordForm] = useState(
    new FindPasswordForm('', ''),
  );

  const [isFormSent, setIsFormSent] = useState(false);

  const isFindPasswordButtonDisabled =
    !findPasswordForm.email || !findPasswordForm.name || isFormSent;

  const handleFindPasswordFormChange = e => {
    setFindPasswordForm({
      ...findPasswordForm,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSendPasswordForm = async e => {
    setIsFormSent(true);
  };

  return {
    isFormSent,
    findPasswordForm,
    handleSendPasswordForm,
    isFindPasswordButtonDisabled,
    handleFindPasswordFormChange,
  };
};
