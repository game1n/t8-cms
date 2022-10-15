export type BlogSectionTypes = {
  title: string;
  heading: string;
  description: string;
  readingTime: number;
  tags: string[];
  id: string;
  blogId: string;
  createdAt: string;
  publisherName: string;
};
export type WriteNewBlogTypes = {
  blogId?: string;
  id: string;
  heading: string;
  title: string;
  description: string;
  readingTime: number;
  tags: string[];
  createdAt?: string;
  publisherName: string;
  blogImage?: string;
};

export type BlogFormProps = {
  closeModal?: () => void;
  publisherName?: string;
  navigate: (path: string) => void;
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
