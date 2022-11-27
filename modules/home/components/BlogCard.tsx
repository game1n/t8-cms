import { Card, Input, Button, Loading, Badge } from '@nextui-org/react';
import styled from 'styled-components';
import dayjs from 'dayjs';
interface BlogCardProps {
    title: string;
    heading: string;
    tags: string[];
    readingTime: number;
    createdAt: string;
    publisherName?: string;
}

const BlogCard = ({title, heading, tags, readingTime, createdAt, publisherName}: BlogCardProps) => {
    return (
        <Parent>
            <Card className='blog-card'>
                <span className='title'>
                    {title}
                </span>
                <DateContainer>
                    <span className='date'>
                        {dayjs(createdAt).format('MMM DD, YYYY')} | 
                    </span>
                    {publisherName && <span className='publisher-name'>
                        {publisherName} | 
                    </span>}
                    <span className='reading-time'>
                        {readingTime} Minutes
                    </span>
                </DateContainer>
                <span className='heading'>
                    {heading}
                </span>
                <Footer>
                    {tags.map((item, index) => <Badge key={index}>{item}</Badge>)}
                </Footer>
            </Card>
        </Parent>
    );
}
export default BlogCard;

const Parent = styled.div`
    .blog-card {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 16px;
        width: 100%;
        .title {
            font-size: 22px;
            font-weight: bold;
        }
        .heading {
           font-size: 18px;
        }
        .date {
            font-size: 16px;
            color: grey;
        }
        .publisher-name {
            font-size: 16px;
            color: grey;
            text-decoration: capitalize;
        }
    }
`;

const DateContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    
`

const Footer = styled.div`
    display: flex;
    gap: 5px;

`;