import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import LoginForm from '.././components/LoginForm';

import { signWithPassword } from '../services/auth';

import { LoginFormState } from '../models/login.models';

const Login = (): ReactElement => {
  const navigate = useNavigate();

  const onButtonClick = (loginFormState: LoginFormState): void => {
    signWithPassword(loginFormState, navigate).catch((error) =>
      alert(error?.error_description || error?.message)
    );
  };

  return (
    <LoginContainer>
      <LoginForm onButtonClick={onButtonClick} />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
`;
