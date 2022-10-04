import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { BlogCardProps } from '../models/blog.models';
const BlogCard = ({ cardContent, onClick }: BlogCardProps): ReactElement => {
  return <Card onClick={onClick}>{cardContent}</Card>;
};

export default BlogCard;

const Card = styled.div`
  height: 200px;
  width: 200px;
  border: 2px solid lightgray;
  border-radius: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  box-shadow: 10px 10px 10px lightgray;
  padding: 10px;
`;
