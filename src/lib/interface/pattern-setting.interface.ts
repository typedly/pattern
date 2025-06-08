// Interface.
import { PatternSettings } from "./pattern-settings.interface";
/**
 * @description Represents the setting for pattern validation.
 * @export
 * @interface PatternSetting
 * @template {RegExp | string | undefined} [Value=RegExp | string | undefined] The type of the regular expression pattern.
 * @template {boolean | undefined} [Numeric=boolean | undefined] The numeric setting for the pattern validation.
 * @template {boolean | undefined} [Lowercase=boolean | undefined] The lowercase setting for the pattern validation.
 * @template {boolean | undefined} [Uppercase=boolean | undefined] The uppercase setting for the pattern validation.
 * @template {boolean | undefined} [Special=boolean | undefined] The special setting for the pattern validation.
 * @template {object} [Settings=PatternSettings<Value>] The type of the settings for the pattern as enhanced customization.
 */
export interface PatternSetting<
  Value extends RegExp | string | undefined = RegExp | string | undefined,
  Numeric extends boolean | undefined = boolean | undefined,
  Lowercase extends boolean | undefined = boolean | undefined,
  Uppercase extends boolean | undefined = boolean | undefined,
  Special extends boolean | undefined = boolean | undefined,
  Settings extends object = PatternSettings<Value, Numeric, Lowercase, Uppercase, Special>
> {
  pattern: Value | Settings
}
