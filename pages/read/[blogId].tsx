import { useRouter } from "next/router";
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getBlogById } from "../../services/content";
import { Loading } from "@nextui-org/react";
import BlogPreview from "../../modules/home/components/BlogPreview";
const ReadBlog = () => {
    const [blogData, setBlogData] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const router = useRouter();
    const { blogId } = router.query;
    const fetchBlog = async (uuid: string) => {
        setLoading(true);
        try {
            const response = await getBlogById(uuid);
            setBlogData(response[0]);
            setLoading(false)
        }
        catch (e) {
            console.error({ e });
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBlog(blogId as string)
    }, [blogId !== undefined])
    return (
        <Parent>
            <Content>
                <div className='inner'>
                    {loading && <Loading type="points" color="currentColor" size="xl" />}
                    {!loading && <BlogPreview data={blogData} />}
                </div>
            </Content>
        </Parent>
    );
}
export default ReadBlog;

const Parent = styled.div`
    height: 100%;
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