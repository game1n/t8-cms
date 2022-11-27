
import { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Input } from '@nextui-org/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import WriteContentComponent from '../modules/write-content/components/WriteContentComponent';
import { useRouter } from 'next/router';
const AddContent = () => {
    const router = useRouter();
    return (
        <Parent>
            <Header>
                <Button auto flat color='secondary' onPress={() => router.push('/home')}>
                    <ArrowBackIcon />
                </Button>
            </Header>
            <Content>
                <div className="inner">
                    <WriteContentComponent />
                </div>
            </Content>

        </Parent>
    );
}

const Parent = styled.div`
    height: 100%;
   width: 100%;

`;

const Header = styled.div`
    display: flex;
    padding: 1rem;
    width: 100%;
`;
const Content = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
   justify-content: center;
   display: flex;
    .inner {
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 1rem;
    }
`;
export default AddContent;