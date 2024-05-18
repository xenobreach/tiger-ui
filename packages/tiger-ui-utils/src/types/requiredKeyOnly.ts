/**
 * Removes the optionality on the specified key.
 * 
 * 
 * Example:
 * ```ts
 * type User = {
 *   id?: number | undefined;
 *   name?: string | undefined;
 *   description?: string | undefined;
 * }
 * 
 * // New user type:
 * type NewUser = RemovePartial<User, 'id'>;
 * ```
 * 
 * Output:
 * ```ts
 * const newUser: NewUser = {
 *   id: number;
 *   name?: string | undefined;
 *   description?: string | undefined;
 * }
 * ```
*/ 
export type RequiredKeyOnly<T extends {}, K extends keyof T> = Omit<T, K> & {
  [MK in K]-?: NonNullable<T[MK]>
}

/** ref
 * @see https://lorefnon.me/2020/02/02/conditionally-making-optional-properties-mandatory-in-typescript/
*/