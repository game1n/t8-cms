import React, { ReactElement, useState, useEffect } from 'react';
import { getSupabaseData } from '../services/supabase.service';
import { BlogSectionTypes } from '../models/blog.models';
import { getAllBlogs } from '../services/blog';
import styled from 'styled-components';
import BlogSection from '../components/BlogSection';
const Home = (): ReactElement => {
  const [blogs, setBlogs] = useState<BlogSectionTypes[]>();
  const { session } = getSupabaseData();

  const acceptCallbackFromModal = (): void => {
    getAllBlogs(session?.user.id as string)
      .then((response) => setBlogs(response))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAllBlogs(session?.user.id as string)
      .then((response) => setBlogs(response))
      .catch((error) => console.error(error));
  }, []);
  return (
    <HomeContainer>
      <BlogSection
        blogs={blogs as BlogSectionTypes[]}
        callback={acceptCallbackFromModal}
      />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
`;
