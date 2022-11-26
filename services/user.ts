import { supabase } from '../config/supabase';
export const getUserDetails = async (
    id: string
) => {
    const { data, error } = await supabase.from('users').select('*').eq('id', id);
    if (data) {
        return data as any;
    }
    throw error as any;
};

export const postUserDetails = async (
    userDetailsPayload: any
) => {
    const { data, error } = await supabase
        .from('users')
        .insert([userDetailsPayload]);
    if (data) {
        return data as any;
    }
    throw error as any;
};