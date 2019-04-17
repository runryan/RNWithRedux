// @flow
// @format

export const isEmpty = (text: string): boolean => {
  if (!text || !text.trim()) {
    return true;
  }
  return false;
};
