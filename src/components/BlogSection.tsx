import React, { ReactElement, useState } from 'react';
import BlogCard from './BlogCard';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { BlogSectionProps, WriteNewBlogTypes } from '../models/blog.models';
import { writeNewBlogInitialState } from '../constants/blog.constants';
import ShareIcon from '@mui/icons-material/Share';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const BlogSection = ({
  blogs,
  callback,
  fullName,
}: BlogSectionProps): ReactElement => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<{ read: boolean; visibility: boolean }>({
    read: false,
    visibility: false,
  });
  const handleOpen = (read: boolean): void =>
    setOpen({ read, visibility: true });
  const [readData, setReadData] = useState<WriteNewBlogTypes>(
    writeNewBlogInitialState
  );
  const handleClose = (): void => {
    setOpen({ read: false, visibility: false });
  };

  const openReadingModal = ({
    id,
    title,
    description,
    tags,
    readingTime,
    createdAt,
    heading,
    publisherName,
  }: WriteNewBlogTypes): void => {
    setReadData({
      id,
      title,
      description,
      tags,
      readingTime,
      createdAt,
      heading,
      publisherName,
    });
    handleOpen(true);
  };
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'auto',
  };

  const constructBlogContent = (
    title: string,
    description: string,
    tags: string[],
    readingTime: number
  ): ReactElement => {
    return (
      <BlogContent>
        <span className="title">{title.slice(0, 15)}...</span>
        <span className="description">{description.slice(0, 80)}...</span>
        <div className="bottom-container">
          <span className="reading-time">{readingTime} minute</span>
          <div className="tag-container">
            {tags.slice(0, 3).map((i, index) => (
              <span className="tags" key={index}>
                {i}
              </span>
            ))}
          </div>
        </div>
      </BlogContent>
    );
  };
  const copyToClipboard = (id: string): void => {
    navigator.clipboard.writeText(`https://game1n.live/blogs/${id}`).then(
      () => alert(`copied to clipboard, https://game1n.live/blogs/${id}`),
      () => alert('copy failed')
    );
  };
  const constructReadContent = (
    id: string,
    title: string,
    description: string,
    createdAt: string
  ): ReactElement => {
    return (
      <BlogContent>
        <span className="title">{title}</span>
        <UtilContainer>
          <span className="date">
            {moment(createdAt).format('DD MMM YYYY')}
          </span>
          <span className="publisher-name">{fullName}</span>
          <ShareIcon onClick={() => copyToClipboard(id)} />
        </UtilContainer>
        <p className="description">{description}</p>
      </BlogContent>
    );
  };
  const AddNewBlogCard = (): ReactElement => {
    return (
      <AddBlogContainer onClick={() => navigate('/publish')}>
        <AddCircleIcon sx={{ height: 70, width: 70 }} color="primary" />
      </AddBlogContainer>
    );
  };
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <BlogsContainer>
        <AddNewBlogCard />
        {blogs
          ?.sort((a: any, b: any) => b.createdAt - a.createdAt)
          .map(
            ({
              blogId,
              title,
              description,
              readingTime,
              tags,
              createdAt,
              heading,
              publisherName,
            }) => {
              return (
                <React.Fragment key={blogId}>
                  <BlogCard
                    cardContent={constructBlogContent(
                      title,
                      heading,
                      tags,
                      readingTime
                    )}
                    onClick={() =>
                      openReadingModal({
                        id: blogId,
                        title,
                        description,
                        tags,
                        readingTime,
                        createdAt,
                        heading,
                        publisherName,
                      })
                    }
                  />
                </React.Fragment>
              );
            }
          )}
      </BlogsContainer>
      <div>
        <Modal
          open={open.visibility}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {open.read &&
              constructReadContent(
                readData.id,
                readData.title,
                readData.description,
                readData.createdAt as string
              )}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default BlogSection;

const BlogsContainer = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  gap: 1rem;
  margin: 1rem;
  flex-wrap: wrap;
  padding: 10px;
  align-items: flex-start;
  justify-content: center;
`;

const BlogContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  .title {
    color: #000000;
    font-family: Roboto, arial, helvetica, sans-serif;
    font-weight: bold;
    font-size: 22px;
  }
  .description {
    color: gray;
    font-family: Roboto, arial, helvetica, sans-serif;
    font-size: 18px;
  }
  .bottom-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 5px;
    left: 0;
    align-items: center;
  }
  .reading-time {
    color: black;
    font-family: Roboto, arial, helvetica, sans-serif;
    font-size: 12px;
  }
  .tag-container {
    display: flex;
    gap: 2px;
  }
  .tags {
    background-color: grey;
    border-radius: 5px;
    padding: 5px;
    color: #ffffff;
  }
`;

const AddBlogContainer = styled.div`
  display: flex;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  border: 2px solid lightgray;
  box-shadow: 10px 10px 10px lightgray;
  padding: 10px;
`;

const UtilContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: flex-start;
  .date {
    color: blue;
  }
`;
