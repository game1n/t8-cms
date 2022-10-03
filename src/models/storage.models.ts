import { storageKeys } from '../enums/storage.enums';
import { SupabaseData } from './supabase.models';

export type StorageItems = {
  [storageKeys.supabaseData]: SupabaseData;
};
