/**
 * @description Represents the pattern settings for validation.
 * @export
 * @interface PatternSettings
 * @template {RegExp | string | undefined} [Value=RegExp | string | undefined] The regular expression pattern to match.
 * @template {boolean | undefined} [Numeric=boolean | undefined] The numeric setting for the pattern validation.
 * @template {boolean | undefined} [Lowercase=boolean | undefined] The lowercase setting for the pattern validation.
 * @template {boolean | undefined} [Uppercase=boolean | undefined] The uppercase setting for the pattern validation.
 * @template {boolean | undefined} [Special=boolean | undefined] The special setting for the pattern validation.
 */
export interface PatternSettings<
  Value extends RegExp | string | undefined = RegExp | string | undefined,
  Numeric extends boolean | undefined = boolean | undefined,
  Lowercase extends boolean | undefined = boolean | undefined,
  Uppercase extends boolean | undefined = boolean | undefined,
  Special extends boolean | undefined = boolean | undefined,
> {
  /**
   * @description Represents the regular expression pattern to match.
   * @type {Value}
   */
  regexp: Value;
  
  /**
   * @description Represents the lowercase option for the pattern validation.
   * @type {Lowercase}
   */
  lowercase: Lowercase;

  /**
   * @description Represents the uppercase option for the pattern validation.
   * @type {Uppercase}
   */
  uppercase: Uppercase;

  /**
   * @description Represents the numeric option for the pattern validation.
   * @type {Numeric}
   */
  numeric: Numeric;

  /**
   * @description Represents the special option for the pattern validation.
   * @type {Special}
   */
  special: Special;
};

  // alphabetic?: boolean;
  // alphanumeric?: boolean;
  // ascii?: boolean;
  // unicode?: boolean;
