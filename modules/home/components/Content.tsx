import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";
import { getAllContent } from "../../../services/content";
import { Loading, Modal } from "@nextui-org/react";
import ProfileCard from "./ProfileCard";
import BlogPreview from "./BlogPreview";
import {useRouter} from 'next/router';
interface ContentProps {
    id: string;
    userData: any;
    blogs: any[];
    loading: boolean;
}
const Content = ({ id, userData, blogs, loading }: ContentProps) => {
    const router = useRouter();
    const [modal, setModal] = useState<boolean>(false);
    const [readingContent, setReadingContent] = useState({});
    const openModal = (data: any) => {
        setReadingContent(data);
        setModal(true);
    }
    const closeModal = () => setModal(false);
    return (
        <ParentContainer>
            <div className="inner">
                <BlogSection>
                    {loading && <Loading type="points" color="currentColor" size="xl" />}
                    {!loading && blogs && blogs?.map((item, index) => {
                        return <div style={{ cursor: 'pointer' }} key={item.blogId} onClick={() => openModal(item)}><BlogCard title={item.title} heading={item.heading} readingTime={item.readingTime} publisherName={item.publisherName} tags={item.tags} createdAt={item.createdAt} /></div>
                    })}
                </BlogSection>
                {!loading && <ProfileSection>
                    <div style={{cursor: 'pointer'}} onClick={() => router.push('/add-content')}><ProfileCard create={true} /></div>
                    <ProfileCard name={userData?.fullName} phone={userData?.phone} articleCount={blogs?.length || 0} create={false} />
                </ProfileSection>}
            </div>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={modal}
                onClose={closeModal}
                width="80%"
            >
                <BlogPreview data={readingContent} />

            </Modal>
        </ParentContainer>
    );
}

export default Content;

const ParentContainer = styled.div`
    height: 100%;
    width: 100%;
   justify-content: center;
   display: flex;
    .inner {
        width: 80%;
        display: flex;
        gap: 1.5rem;
        padding: 1rem;
    }
`;

const BlogSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;
`;

const ProfileSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
`;