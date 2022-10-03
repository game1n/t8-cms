import { getStorageItem, setStorageItem } from './storage.service';

import { defaultSupabaseData } from '../constants/supabase.constants';

import { storageKeys } from '../enums/storage.enums';

import { SupabaseData } from '../models/supabase.models';

export const getSupabaseData = (): SupabaseData =>
  getStorageItem(storageKeys.supabaseData, defaultSupabaseData);

export const setSupabaseData = (supabaseData: SupabaseData): void =>
  setStorageItem(storageKeys.supabaseData, supabaseData);
