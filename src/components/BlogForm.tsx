import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { getSupabaseData } from '../services/supabase.service';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';
import { WriteNewBlogTypes, BlogFormProps } from '../models/blog.models';
import { writeNewBlogInitialState } from '../constants/blog.constants';
import { writeNewBlog, uploadImage } from '../services/blog';
import uuid from 'react-uuid';
const BlogForm = ({
  publisherName,
  closeModal,
  navigate,
}: BlogFormProps): ReactElement => {
  const { session } = getSupabaseData();
  const [formState, setFormState] = useState<WriteNewBlogTypes>(
    writeNewBlogInitialState
  );
  const publishBlog = (): void => {
    writeNewBlog(formState)
      .then((response) => {
        console.table(response);
      })
      .catch((error) => console.error(error));
    navigate('/home');
  };

  const onImageUpload = (img: any): void => {
    uploadImage(uuid(), img.target.files[0])
      .then((response) => {
        setFormState({
          ...formState,
          blogImage: `https://trrzsuqmthjjgjquxcwu.supabase.co/storage/v1/object/public/blog-image/${
            response.path as string
          }`,
        });
      })
      .catch((err) => console.error(err));
    publishBlog();
  };
  return (
    <Container>
      <TextField
        label="Title"
        variant="standard"
        type="text"
        value={formState.title}
        onChange={(e: any) =>
          setFormState({ ...formState, title: e.target.value })
        }
        fullWidth
        required
        style={{
          height: '40px',
          fontFamily: 'Roboto, arial, helvetica, sans-serif',
          fontSize: '22px',
        }}
      />
      <TextField
        label="Heading"
        variant="standard"
        type="text"
        value={formState.heading}
        onChange={(e: any) =>
          setFormState({ ...formState, heading: e.target.value })
        }
        fullWidth
        required
        style={{
          height: '40px',
          fontFamily: 'Roboto, arial, helvetica, sans-serif',
          fontSize: '22px',
        }}
      />
      <TextareaAutosize
        maxRows={10}
        placeholder="Body"
        value={formState.description}
        onChange={(e: any) =>
          setFormState({ ...formState, description: e.target.value })
        }
        className="blog-field"
        style={{
          height: '500px',
          width: '100%',
          fontFamily: 'Roboto, arial, helvetica, sans-serif',
          fontSize: '22px',
          overflowY: 'scroll',
          padding: '6px',
          borderRadius: 6,
        }}
      />
      <input
        type="file"
        placeholder="upload image"
        onChange={(e: any) => onImageUpload(e)}
        // style={{
        //   height: '40px',
        //   width: '100%',
        //   fontSize: '22px',
        // }}
      />
      <TextField
        label="Reading time (in minutes)"
        variant="standard"
        type="number"
        value={formState.readingTime}
        onChange={(e: any) =>
          setFormState({
            ...formState,
            readingTime: e.target.value,
            id: session?.user?.id as string,
            publisherName: publisherName as string,
          })
        }
        fullWidth
        required
        style={{
          height: '40px',
          fontFamily: 'Roboto, arial, helvetica, sans-serif',
          fontSize: '22px',
        }}
      />
      <TextField
        label="Tags"
        placeholder="add comma saperated tags, for eg. education, tech"
        variant="standard"
        type="text"
        value={formState.tags.map((i) => i)}
        onChange={(e: any) =>
          setFormState({
            ...formState,
            tags: e.target.value.split(','),
          })
        }
        fullWidth
        required
        style={{
          height: '40px',
          fontFamily: 'Roboto, arial, helvetica, sans-serif',
          fontSize: '22px',
        }}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={onImageUpload}
        disabled={formState.title === '' || formState.description === ''}
      >
        Publish
      </Button>
    </Container>
  );
};

export default BlogForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
