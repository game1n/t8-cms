import {supabase} from '.././config/supabase';

export const signUpPassword = async(email: string, password: string) => {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
      })
      if(data){
        return data;
      }
      if(error){
        throw error;
      }
}

export const signInWithPassword = async(email: string, password: string) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if(data){
        return data;
      }
      if(error){
        throw error;
      }
}