/**
 * @description Represents a mapping of pattern flags to their corresponding regular expression patterns.
 * @export
 */
export type PatternMap = {
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