import LoginComponent from '../modules/auth/components/LoginComponent';
import styled from 'styled-components';
const Login = () => {
    return <Container><LoginComponent /></Container>
}
export default Login

const Container = styled.div`
    height: 100vh;
    width: 100vw;   
`;