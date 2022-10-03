import { storageKeys } from '../enums/storage.enums';
import { StorageItems } from '../models/storage.models';

export const getStorageItem = <T>(
  storageKey: storageKeys,
  defaultValue: T
): T => {
  const item = localStorage.getItem(storageKey) ?? JSON.stringify(defaultValue);
  return JSON.parse(item);
};

export const setStorageItem = (
  storageKey: storageKeys,
  item: StorageItems[typeof storageKey]
): void => localStorage.setItem(storageKey, JSON.stringify(item));
