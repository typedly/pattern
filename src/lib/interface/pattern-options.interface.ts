// Interface.
import { PatternSettings } from "./pattern-settings.interface";
/**
 * @description Represents the pattern options for validation settings.
 * @export
 * @interface PatternOptions
 * @template {RegExp | string | undefined} [Value=RegExp | string | undefined] The regular expression pattern to match.
 * @template {boolean | undefined} [Numeric=boolean | undefined] The numeric setting for the pattern validation.
 * @template {boolean | undefined} [Lowercase=boolean | undefined] The lowercase setting for the pattern validation.
 * @template {boolean | undefined} [Uppercase=boolean | undefined] The uppercase setting for the pattern validation.
 * @template {boolean | undefined} [Special=boolean | undefined] The special setting for the pattern validation.
 * @extends {Partial<PatternSettings<Value, Numeric, Lowercase, Uppercase, Special>>} The partial pattern settings for enhanced customization.
 */
export interface PatternOptions<
  Value extends RegExp | string | undefined = RegExp | string | undefined,
  Numeric extends boolean | undefined = boolean | undefined,
  Lowercase extends boolean | undefined = boolean | undefined,
  Uppercase extends boolean | undefined = boolean | undefined,
  Special extends boolean | undefined = boolean | undefined,
> extends Partial<PatternSettings<Value, Numeric, Lowercase, Uppercase, Special>> {}
