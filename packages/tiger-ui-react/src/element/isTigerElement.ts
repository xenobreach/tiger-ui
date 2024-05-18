/**
 * Check if an element was created with `createElement`.
*/
export default function isTigerElement(element: any) {
  return typeof element === 'object' && element?.__tiger_options
}
