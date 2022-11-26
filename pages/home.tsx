import styled from 'styled-components';
import { Drawer } from '@mui/material';
import {useState, useEffect, useRef} from 'react';
import { getUserDetails } from '../services/user';
import OnboardingForm from '../modules/onboarding/components/OnboardingForm';
const Home = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const id = useRef<any>(null);
    const fetchUserData = async(id: string) => {
        try {
            const response = await getUserDetails(id);
            if(response.length === 0) setOpenDrawer(true);
            setUser(response[0]);
        }catch(e){console.error({e})}
    }
    useEffect(() => {
        id.current = JSON.parse(localStorage.getItem('session') as string)?.session?.user?.id;
        fetchUserData(id.current as unknown as string)
    }, [])

    const handleCallback = (data: any) => {
        setUser(data[0]);
        setOpenDrawer(false);
    }
    return (
    <Parent>
        <Drawer anchor='left' open={openDrawer}     PaperProps={{
            sx: { width: "500px" },
          }}>
            <div>
            <OnboardingForm id={id.current as unknown as string} callback={handleCallback} />
            </div>
        </Drawer>
    </Parent>);
}
export default Home;

const Parent = styled.div`
    height: 100%;
    width: 100%;

`;