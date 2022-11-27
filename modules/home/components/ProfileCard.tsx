import { Card, User } from '@nextui-org/react';
import styled from 'styled-components'
import AddCardIcon from '@mui/icons-material/AddCard';
interface ProfileCardProps {
    create: boolean;
    name?: string;
    phone?: string;
    articleCount?: number;
}
const ProfileCard = ({ name, phone, articleCount, create }: ProfileCardProps) => {
    return (
        <Parent>
            <div className='inner-card'>
                {create && <Card className='profile-card'>
                    <AddCardIcon htmlColor='#e6d1f2' fontSize='large'/>
                    Create
                </Card>}
                {!create && <Card className='profile-card'><User text={name} size='lg' name='' />
                    <span className='name'>{name}</span>
                    <span className="phone">{phone}</span>
                    <span className='count'>Published: {articleCount} </span>
                </Card>}
            </div>
        </Parent>
    );
}

export default ProfileCard;

const Parent = styled.div`
    .inner-card {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .add-new {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .profile-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        padding: 16px;
        width: 100%;
    }
    .name {
        font-size: 22px;
        font-weight: bold;
    }

`;