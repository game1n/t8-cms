import React, { ReactElement } from 'react';
import LoginForm from '.././components/LoginForm';
import styled from 'styled-components';
const Login = (): ReactElement => {
  const onButtonClick = (): void => alert('clicked');
  return (
    <LoginContainer>
      <LoginForm formTitle="Login" onButtonClick={onButtonClick} />
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  height: 100%;
  width: 100%;
`;
