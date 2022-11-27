import { Card, Input, Button, Loading, Badge } from '@nextui-org/react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import * as DOMPurify from 'dompurify';
import ShareIcon from '@mui/icons-material/Share';
interface BlogPreviewProps {
    data: any;
}

const BlogPreview = ({data }: BlogPreviewProps) => {
    const shareBlog = () => {
        navigator.clipboard.writeText(`${location.origin}/read/${data?.blogId}`).then(
            () => alert(`copied to clipboard,${location.origin}/read/${data?.blogId}`),
            () => alert('copy failed')
          );
    }
    return (
        <Parent>
            <Card className='blog-card'>
                <span className='title'>
                    {data?.title}
                </span>
                <DateContainer>
                    <span className='date'>
                        {dayjs(data?.createdAt).format('MMM DD, YYYY')} | 
                    </span>
                    {data?.publisherName && <span className='publisher-name'>
                        {data?.publisherName} | 
                    </span>}
                    <span className='reading-time'>
                        {data?.readingTime} Minutes
                    </span>
                    <ShareIcon color='primary' onClick={shareBlog}/>
                </DateContainer>
                <span className='heading'>
                    {data?.heading}
                </span>
                <span className="description" dangerouslySetInnerHTML={{__html: data?.description}}>
                </span>
                <Footer>
                    {data?.tags?.map((item: any, index: any) => <Badge key={index}>{item}</Badge>)}
                </Footer>
            </Card>
        </Parent>
    );
}
export default BlogPreview;

const Parent = styled.div`
    .blog-card {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 16px;
        width: 100%;
        .title {
            text-align: left;
            font-size: 22px;
            font-weight: bold;
        }
        .heading {
            text-align: left;
           font-size: 18px;
        }
        .date {
            font-size: 16px;
            color: grey;
        }
        .description {
            text-align: left;
            line-height: 30px;
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