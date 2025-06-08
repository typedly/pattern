// Type.
import { PatternMap } from "./pattern-map.type";
/**
 * @description Represents the pattern flags for validation.
 * @export
 * @template {boolean} Lowercase The lowercase setting for the pattern validation.
 * @template {boolean} Uppercase The uppercase setting for the pattern validation.
 * @template {boolean} Digit The digit setting for the pattern validation.
 * @template {boolean} Special The special character setting for the pattern validation.
 */
export type PatternFromFlags<
  Lowercase extends boolean,
  Uppercase extends boolean,
  Digit extends boolean,
  Special extends boolean
> = PatternMap[`${Lowercase}-${Uppercase}-${Digit}-${Special}`];