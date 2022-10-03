import React, { useState, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import { getSupabaseData } from '../services/supabase.service';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { TextareaAutosize } from '@mui/material';
import { WriteNewBlogTypes } from '../models/blog.models';
import { writeNewBlogInitialState } from '../constants/blog.constants';
import { writeNewBlog } from '../services/blog';
const BlogForm = (): ReactElement => {
  const { session } = getSupabaseData();
  const [formState, setFormState] = useState<WriteNewBlogTypes>(
    writeNewBlogInitialState
  );
  const publishBlog = (): void => {
    writeNewBlog(formState)
      .then((response) => console.table(response))
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
        style={{ height: '40px' }}
      />
      <TextareaAutosize
        maxRows={10}
        placeholder="blog body"
        value={formState.description}
        onChange={(e: any) =>
          setFormState({ ...formState, description: e.target.value })
        }
        style={{ width: '100%', height: '150px' }}
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
        style={{ height: '40px' }}
      />
      <Button variant="outlined" color="primary" onClick={publishBlog}>
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
