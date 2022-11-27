import styled from 'styled-components';
import { Drawer } from '@mui/material';
import {useState, useEffect, useRef} from 'react';
import { getUserDetails } from '../services/user';
import { getAllContent } from '../services/content';
import OnboardingForm from '../modules/onboarding/components/OnboardingForm';
import Content from '../modules/home/components/Content';
import Nav from '../modules/home/components/Nav';
const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
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
    const [blogs, setBlogs] = useState<any[]>();
    const fetchBlogs = async (uuid: string) => {
        try {
            const response = await getAllContent(uuid)
            setBlogs(response);
        } catch (e) {
            console.error(e);
        }
    }
    useEffect(() => {
        id.current = JSON.parse(localStorage.getItem('session') as string)?.session?.user?.id;
        setLoading(true);
        Promise.all([ fetchUserData(id.current as unknown as string),
            fetchBlogs(id.current as unknown as string)]).then(() => setLoading(false)).catch(() => setLoading(false));
       
    }, [])

    const handleCallback = async(data: any) => {
        await fetchUserData(id.current)
        setOpenDrawer(false);
    }
    return (
    <Parent>
        <Nav name={user?.fullName} />
        <Drawer anchor='left' open={openDrawer}     PaperProps={{
            sx: { width: "500px" },
          }}>
            <div>
            <OnboardingForm id={id.current as unknown as string} callback={handleCallback} />
            </div>
        </Drawer>
        <Content id={id.current} userData={user} blogs={blogs!} loading={loading} />
    </Parent>);
}
export default Home;

const Parent = styled.div`
    height: 100%;
    width: 100%;

`;