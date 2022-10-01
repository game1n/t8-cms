import React, { ReactElement } from 'react';
import LoginForm from '.././components/LoginForm';
import styled from 'styled-components';
import { signUpPassword, signInWithPassword } from '.././services/auth';
import { useNavigate } from 'react-router-dom';
const Login = (): ReactElement => {
  const navigate = useNavigate();
  const onButtonClick = async (formState: {
    email: string;
    password: string;
    loginState: 'SIGN_IN' | 'SIGN_UP';
  }) => {
    if (formState.loginState === 'SIGN_UP') {
      try {
        await signUpPassword(formState.email, formState.password);
        alert('please verify your email');
      } catch (error: any) {
        alert(error?.error_description || error?.message);
      }
      return;
    } else {
      try {
        const response = await signInWithPassword(
          formState.email,
          formState.password
        );
        localStorage.setItem('persist-session', JSON.stringify(response));
        navigate('/home');
      } catch (error: any) {
        alert(error?.error_description || error?.message);
      }
    }
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
