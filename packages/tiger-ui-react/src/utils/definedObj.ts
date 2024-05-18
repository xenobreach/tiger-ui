/**
 * Filters out undefined values in an object and returns only defined values.
 * 
 * @see https://chat.openai.com/share/0d1df729-e305-4358-9cd9-bc86fc1e6cbd
*/
export default function definedObj(object: any) {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  if (!isObject(object)) return undefined;

  return Object.fromEntries(
    Object.entries(object).filter(([_, value]) => value !== undefined)
  );
}