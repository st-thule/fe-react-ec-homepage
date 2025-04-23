export enum CardTypeKey {
  PET = 'pets',
  PRODUCT = 'products',
  BLOG = 'blogs',
}

export enum StorageKeys {
  PETS = 'pets',
}

export const getDataFromLocalStorage = <T>(
  key: StorageKeys,
  defaultValue: T
): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};
export const setDataFromLocalStorage = <T>(
  key: StorageKeys,
  value: T
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
