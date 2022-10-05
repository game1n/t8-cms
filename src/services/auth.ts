import { NavigateFunction } from 'react-router/dist/lib/hooks';

import { AuthResponse } from '@supabase/supabase-js';
import { SignUpWithPasswordCredentials } from '@supabase/gotrue-js/src/lib/types';

import { setSupabaseData } from './supabase.service';

import { loginStates } from '../enums/login.enums';

import { LoginFormState } from '../models/login.models';

import { supabase } from '../config/supabase';

export const signUpPassword = async (
  credentials: SignUpWithPasswordCredentials
): Promise<AuthResponse> => await supabase.auth.signUp(credentials);

export const signInWithPassword = async (
  credentials: SignUpWithPasswordCredentials
): Promise<AuthResponse> => await supabase.auth.signInWithPassword(credentials);

export const logOut = async (navigate: NavigateFunction): Promise<void> => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw error;
  }
  setSupabaseData({ user: null, session: null });
  localStorage.clear();
  location.reload();
};
export const signWithPassword = async (
  { loginState, ...formState }: LoginFormState,
  navigate: NavigateFunction
): Promise<void> => {
  const isSignUp = loginState === loginStates.signUp;
  const supabaseSignMethod = isSignUp ? signUpPassword : signInWithPassword;

  const { data, error } = await supabaseSignMethod(formState);

  if (error) {
    throw error;
  }

  if (isSignUp) {
    alert('please verify your email');
  } else {
    setSupabaseData(data);
    location.reload();
  }
};
