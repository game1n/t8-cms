import React, { ReactElement, useState } from 'react';
import BlogCard from './BlogCard';
import styled from 'styled-components';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { BlogSectionProps, WriteNewBlogTypes } from '../models/blog.models';
import BlogForm from './BlogForm';
import { writeNewBlogInitialState } from '../constants/blog.constants';
const BlogSection = ({ blogs, callback }: BlogSectionProps): ReactElement => {
  const [open, setOpen] = useState<{read: boolean; visibility: boolean}>({read: false, visibility: false});
  const handleOpen = (read: boolean): void =>  setOpen({read, visibility: true});
  const [readData, setReadData] = useState<WriteNewBlogTypes>(writeNewBlogInitialState)
  const handleClose = (): void => {
    setOpen({read: false, visibility: false});
  };
  const closeModalAfterBlogPublish = (): void => {
    callback();
    handleClose();
  };

    const openReadingModal = ({id, title, description, tags, readingTime}: WriteNewBlogTypes): void => {
      setReadData({id, title, description, tags, readingTime})
      handleOpen(true);
    }
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
    overflow: 'auto'
  };

  const constructBlogContent = (
    title: string,
    description: string,
    tags: string[],
    readingTime: number,
  ): ReactElement => {
    return (
      <BlogContent>
        <span className="title">{title}</span>
        <span className="description">{description}</span>
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

  const constructReadContent = ( title: string,
    description: string,
   ): ReactElement => {
      return (
    <BlogContent>
    <span className="title">{title}</span>
    <span className="description">{description}</span>
  </BlogContent>
      );
  }; 
  const AddNewBlogCard = (): ReactElement => {
    return (
      <AddBlogContainer onClick={() => handleOpen(false)}>
        <AddCircleIcon sx={{ height: 70, width: 70 }} color="primary" />
      </AddBlogContainer>
    );
  };
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <BlogsContainer>
        <AddNewBlogCard />
        {blogs?.map(({ blogId, title, description, readingTime, tags }) => {
          return (
            <React.Fragment key={blogId}>
              <BlogCard
                cardContent={constructBlogContent(
                  title,
                  description,
                  tags,
                  readingTime
                )}
                onClick={() => openReadingModal({id: blogId, title, description, tags, readingTime})}
              />
            </React.Fragment>
          );
        })}
      </BlogsContainer>
      <div>
        <Modal
          open={open.visibility}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {open.read ? constructReadContent(readData.title, readData.description) :  <BlogForm closeModal={closeModalAfterBlogPublish} />}
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
    color: blue;
    font-family: Roboto, arial, helvetica, sans-serif;
    font-weight: bold;
    font-size: 22px;
  }
  .description {
    color: black;
    font-family: Roboto, arial, helvetica, sans-serif;
    font-size: 18px;
    overflow: hidden;
    max-width: 75ch;
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
