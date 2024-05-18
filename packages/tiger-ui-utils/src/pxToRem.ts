export const pxToRem = (value: number | string): string => {
  // If the value is number, convert it to rem value
  if (typeof value === 'number') {
    return `${value}rem`;
  }
  
  // if value is string give default value
  return value;
};
