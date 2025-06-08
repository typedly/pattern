import { PatternOptions } from '../lib/interface';

const example1: PatternOptions<
  RegExp, // Value
  true, // Numeric
  true, // Lowercase
  true, // Uppercase
  false // Special
> = {
  lowercase: true,
  uppercase: true,
  special: false,
  numeric: true,
};
