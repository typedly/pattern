/**
 * @description Represents the pattern flags for validation.
 * @export
 * @template {boolean} Lowercase The lowercase setting for the pattern validation.
 * @template {boolean} Uppercase The uppercase setting for the pattern validation.
 * @template {boolean} Digit The digit setting for the pattern validation.
 * @template {boolean} Special The special character setting for the pattern validation.
 */
type PatternMap = {
  'true-true-true-true': '[a-zA-Z0-9\\W_]+',  // all: lowercase, uppercase, digit, special
  'true-true-true-false': '[a-zA-Z0-9]+',     // lowercase, uppercase, digit
  'true-true-false-true': '[a-zA-Z\\W_]+',    // lowercase, uppercase, special
  'true-true-false-false': '[a-zA-Z]+',       // lowercase, uppercase
  'true-false-true-true': '[a-z0-9\\W_]+',    // lowercase, digit, special
  'true-false-true-false': '[a-z0-9]+',       // lowercase, digit
  'true-false-false-true': '[a-z\\W_]+',      // lowercase, special
  'true-false-false-false': '[a-z]+',         // lowercase only
  'false-true-true-true': '[A-Z0-9\\W_]+',    // uppercase, digit, special
  'false-true-true-false': '[A-Z0-9]+',       // uppercase, digit
  'false-true-false-true': '[A-Z\\W_]+',      // uppercase, special
  'false-true-false-false': '[A-Z]+',         // uppercase only
  'false-false-true-true': '[0-9\\W_]+',      // digit, special
  'false-false-true-false': '[0-9]+',         // digit only
  'false-false-false-true': '[\\W_]+',        // special only
  'false-false-false-false': ''               // none
};

export type PatternFromFlags<
  Lowercase extends boolean,
  Uppercase extends boolean,
  Digit extends boolean,
  Special extends boolean
> = PatternMap[`${Lowercase}-${Uppercase}-${Digit}-${Special}`];