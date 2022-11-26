import { supabase } from "../config/supabase";

export const signUpWithPassword = async(email: string, password: string) => {
    const {data, error} = await supabase.auth.signUp({email, password})
    if(data) return data;
    throw error;
}

export const signIn = async(email: string, password: string) => {
    const {data, error} = await supabase.auth.signInWithPassword({email, password});
    if(data) return data;
    throw error;
}