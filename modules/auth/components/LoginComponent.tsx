import styled from 'styled-components'
import { Card, Input, Button, Loading } from '@nextui-org/react';
import { useState } from 'react';
import { signIn, signUpWithPassword } from '../../../services/auth';
import { useRouter } from 'next/router';
const Login = () => {
    const router = useRouter();
    const [toggle, setToggle] = useState<'LOGIN' | 'SIGN_UP'>('LOGIN');
    const [loading, setLoading] = useState<boolean>(false);
    const [state, setState] = useState<{ email: string, password: string }>({ email: '', password: '' });
    const disable = state?.email.length < 5 || state?.password.length < 5;


    const onButtonClick = async() => {
        setLoading(true);
        if(toggle === 'LOGIN'){
            try{
                const response = await signIn(state.email, state.password)
                localStorage.setItem('session', JSON.stringify(response));
                setLoading(false);
                router.push('/home');

            }
            catch(e){
                console.error({e});
                setLoading(false);
            }
        }
        else {
            try{
                const response = await signUpWithPassword(state.email, state.password);
                setLoading(false);
            }
            catch(e){
                console.error({e});
                setLoading(false);
            }
        }
    }
    const toggler = () => {
        if(toggle === 'LOGIN') setToggle('SIGN_UP');
        else setToggle('LOGIN');
    }
    return (
        <Parent>
            <Card className='login-card'>
                <div className="input-elements">
                    <Input placeholder="Email" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className='input' />
                    <Input placeholder="Password" value={state.password} onChange={(e) => setState({ ...state, password: e.target.value })} type="password" className='input' />
                </div>
                <Button bordered color="secondary" auto disabled={disable} onPress={onButtonClick} style={{height: 60}}>
                {loading && <Loading type="points" color="currentColor" size="sm" />}
                {toggle === 'LOGIN' ? 'Login' : 'Sign Up'}
                </Button>
                <span className="register">{toggle === 'LOGIN' ? 'New user?' : 'Existing User?'} <strong style={{cursor: 'pointer'}} onClick={toggler}>{toggle === 'LOGIN' ? 'Sign up' : 'Login'}</strong></span>
            </Card>
        </Parent>
    );
}
export default Login;
const Parent = styled.div`
    position: relative;
    height: 50%;
    width: 100%;
    background: #e6d1f2;
    .login-card {
        height: 400px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        padding: 2rem;
        .input-elements {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            width: 100%;
            height: 100%;
            .input {
                height: 60px;
                font-size: 20px;
                font-weight: bold;
                color: #e6d1f2;
            }
        }
        .register {
            font-size: 16px;
            color: #000000;

        }
        
    }
`;

const Header = styled.span`
    font-size: 22px;
    font-weight: bold;
    color: #000000;
`;