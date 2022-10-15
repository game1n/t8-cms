import { supabase } from '../config/supabase';
import { BlogSectionTypes, WriteNewBlogTypes } from '../models/blog.models';
export const getAllBlogs = async (id: string): Promise<BlogSectionTypes[]> => {
  const { data, error } = await supabase.from('blogs').select('*').eq('id', id);
  if (data) {
    return data as any;
  }
  throw error as any;
};

export const writeNewBlog = async (
  writeNewBlogInitialState: WriteNewBlogTypes
): Promise<any[]> => {
  const { data, error } = await supabase
    .from('blogs')
    .insert([writeNewBlogInitialState]);
  if (data) {
    return data as any;
  }
  throw error as any;
};

export const uploadImage = async (id: string, image: string): Promise<any> => {
  const { data, error } = await supabase.storage
    .from('blog-image')
    .upload(id, image);
  if (data) {
    return data as any;
  }
  throw error as any;
};
