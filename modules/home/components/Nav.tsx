
import { Navbar, Text, Button } from "@nextui-org/react";
import {useRouter} from 'next/router';
interface NavProps {
    name: string;
}
const Nav = ({name}: NavProps) => {
    const router = useRouter();
    const logoff = () => {
        localStorage.clear();
        router.push('/login')
    }
    return (
        <Navbar isBordered variant='floating' containerCss={{border: '1px solid #e6d1f2'}}>
            <Navbar.Brand>
                <Text b color='inherit'>
                    {name} Newsletter
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat onPress={logoff} color='secondary'>
                        Log out
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    );
}
export default Nav;