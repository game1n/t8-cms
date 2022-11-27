import { supabase } from "../config/supabase";

export const getAllContent = async(id: string) => {
    const { data, error } = await supabase.from('blogs').select('*').eq('id', id);
    if (data) {
      return data as any;
    }
    throw error as any;
}
export const getBlogById = async(blogId: string) => {
  const {data, error} = await supabase
  .from('blogs').select('*').eq('blogId', blogId);
  if(data)   return data;
      throw error;
}
export const publishContent = async(content: any) => {
    const { data, error, status } = await supabase
    .from('blogs')
    .insert([content]);
    return status;
}