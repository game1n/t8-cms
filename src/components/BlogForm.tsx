import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { getSupabaseData } from '../services/supabase.service';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';
import { WriteNewBlogTypes, BlogFormProps } from '../models/blog.models';
import { writeNewBlogInitialState } from '../constants/blog.constants';
import { writeNewBlog } from '../services/blog';
const BlogForm = ({ closeModal }: BlogFormProps): ReactElement => {
  const { session } = getSupabaseData();
  const [formState, setFormState] = useState<WriteNewBlogTypes>(
    writeNewBlogInitialState
  );
  const publishBlog = (): void => {
    closeModal();
    writeNewBlog(formState)
      .then((response) => {
        console.table(response);
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container>
      <TextField
        label="title"
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
      <TextareaAutosize
        maxRows={10}
        placeholder="blog body"
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
          overflow: 'scroll',
        }}
      />
      <TextField
        label="reading time (in minutes)"
        variant="standard"
        type="number"
        value={formState.readingTime}
        onChange={(e: any) =>
          setFormState({
            ...formState,
            readingTime: e.target.value,
            id: session?.user?.id as string,
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
        label="tags"
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
        onClick={publishBlog}
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
