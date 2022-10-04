export type BlogSectionTypes = {
  title: string;
  description: string;
  readingTime: number;
  tags: string[];
  id: string;
  blogId: string;
  createdAt: string;
};
export type WriteNewBlogTypes = {
  id: string;
  title: string;
  description: string;
  readingTime: string;
  tags: string[];
};

export type BlogFormProps = {
  closeModal: () => void;
};
export type BlogCardProps = {
  cardContent: JSX.Element;
};
export type BlogSectionProps = {
  blogs: BlogSectionTypes[];
  callback: () => void;
};
