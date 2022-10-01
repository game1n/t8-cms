import React from 'react'
import LoginForm from '.././components/LoginForm';
import styled from 'styled-components';
const Login = () => {
    const onButtonClick = () => alert('clicked');
  return (
    <LoginContainer>
         <LoginForm formTitle='Login' onButtonClick={onButtonClick}/>
    </LoginContainer>
   
  )
}

export default Login;

const LoginContainer = styled.div`
    height: 100%;
    width: 100%;
`;