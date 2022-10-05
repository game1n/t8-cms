import { supabase } from '../config/supabase';
import {
  UserDetailsPayloadType,
  UserDetailsResponseType,
} from '../models/user.models';
export const getUserDetails = async (
  id: string
): Promise<UserDetailsResponseType[]> => {
  const { data, error } = await supabase.from('users').select('*').eq('id', id);
  if (data) {
    return data as any;
  }
  throw error as any;
};

export const postUserDetails = async (
  userDetailsPayload: UserDetailsPayloadType
): Promise<any[]> => {
  const { data, error } = await supabase
    .from('users')
    .insert([userDetailsPayload]);
  if (data) {
    return data as any;
  }
  throw error as any;
};
