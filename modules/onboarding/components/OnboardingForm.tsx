import { Card, Input, Button, Loading } from '@nextui-org/react';
import styled from 'styled-components';
import { useState } from 'react';
import { postUserDetails } from '../../../services/user';
import { idText } from 'typescript';
interface OnboardingFormProps {
    id: string;
    callback: (data?: any) => void;
}
const OnboardingForm = ({ id, callback }: OnboardingFormProps) => {

    const [state, setState] = useState<{ fullName: string, phone: string }>({ fullName: "", phone: "" });
    const [loading, setLoading] = useState<boolean>(false);
    const disable = state?.fullName === '' || state?.phone.length < 11;
    const onButtonClick = async () => {
        setLoading(true);
        const data = {
            fullName: state.fullName,
            phone: state.phone,
            id: id,
        }
        const response = await postUserDetails(data);
        if([200, 201].includes(response)){
            callback();
        }
        setLoading(false)
    }
    return (
        <Container>
            <Card className='login-card'>
                <span>Plase enter your details!</span>
                <Input placeholder="Full Name" value={state.fullName} onChange={(e) => setState({ ...state, fullName: e.target.value })} className='input' />
                <Input placeholder="Phone" value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} type="password" className='input' />

                <Button bordered color="secondary" disabled={disable} onPress={onButtonClick} style={{ height: 30 }}>
                    {loading && <Loading type="points" color="currentColor" size="sm" />} Submit
                </Button>
            </Card>
        </Container>
    )
}
export default OnboardingForm;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .login-card {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem;
    }


`;