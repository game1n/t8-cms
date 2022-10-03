import { storageKeys } from '../enums/storage.enums';
import { SupabaseData } from './supa-base.models';

export type StorageItems = {
  [storageKeys.supabaseData]: SupabaseData;
};
