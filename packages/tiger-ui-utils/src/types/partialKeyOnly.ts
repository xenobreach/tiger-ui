/**
 * PARTIAL KEY ONLY
 * 
 * refs:
 * @see https://stackoverflow.com/a/59847622
*/

export type PartialKeyOnly<T, K extends PropertyKey = PropertyKey> =
  Partial<Pick<T, Extract<keyof T, K>>> & Omit<T, K> extends infer O ?
  { [P in keyof O]: O[P] } : never;