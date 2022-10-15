import React, { ReactElement } from 'react';
import BlogForm from '../components/BlogForm';
import Header from '../components/Header';
import { useUserContext } from '../store/userContext';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const Publish = (): ReactElement => {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { userState, userDispatch } = useUserContext();
  const back = (
    <BackContainer onClick={() => navigate('/home')}>
      <KeyboardBackspaceIcon />
    </BackContainer>
  );
  return (
    <Parent>
      <Header
        leftContainer={back}
        logOut={() => console.log('logout')}
        name={userState.fullName}
      />
      <FormContainer>
        <BlogForm publisherName={userState[0]?.fullName} navigate={navigate} />
      </FormContainer>
    </Parent>
  );
};

export default Publish;

const Parent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: lightgray;
`;

const FormContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: 100px 12px 12px 12px;
  padding: 2em;
  border: 1px solid black;
  border-radius: 12px;
  background: #ffffff;
`;

const BackContainer = styled.div`
  height: 36px;
  width: 36px;
  border: 2px solid black;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
