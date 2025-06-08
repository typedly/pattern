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
> =
  Lowercase extends true
    ? Uppercase extends true
      ? Digit extends true
        ? Special extends true
          ? '[a-zA-Z0-9\\W_]+' // all: lowercase, uppercase, digit, special
          : '[a-zA-Z0-9]+'     // lowercase, uppercase, digit
        : Special extends true
          ? '[a-zA-Z\\W_]+'    // lowercase, uppercase, special
          : '[a-zA-Z]+'        // lowercase, uppercase
      : Digit extends true
        ? Special extends true
          ? '[a-z0-9\\W_]+'    // lowercase, digit, special
          : '[a-z0-9]+'        // lowercase, digit
        : Special extends true
          ? '[a-z\\W_]+'       // lowercase, special
          : '[a-z]+'
    : Uppercase extends true
      ? Digit extends true
        ? Special extends true
          ? '[A-Z0-9\\W_]+'    // uppercase, digit, special
          : '[A-Z0-9]+'        // uppercase, digit
        : Special extends true
          ? '[A-Z\\W_]+'       // uppercase, special
          : '[A-Z]+'
      : Digit extends true
        ? Special extends true
          ? '[0-9\\W_]+'       // digit, special
          : '[0-9]+'
        : Special extends true
          ? '[\\W_]+'          // special only
          : '';