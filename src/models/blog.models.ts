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
  blogId?: string;
  id: string;
  title: string;
  description: string;
  readingTime: number;
  tags: string[];
  createdAt?: string;
};

export type BlogFormProps = {
  closeModal: () => void;
};
export type BlogCardProps = {
  cardContent: JSX.Element;
  onClick: () => void;
};
export type BlogSectionProps = {
  blogs: BlogSectionTypes[];
  callback: () => void;
  fullName: string;
};
