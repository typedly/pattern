import { PatternConfiguration } from '../lib/interface';

const example1: PatternConfiguration<
  RegExp, // Value
  true, // Numeric
  true, // Lowercase
  true, // Uppercase
  true // Special
> = {
  lowercase: true,
  regexp: /[a-zA-Z0-9\W_]+/g,
  uppercase: true,
  special: true,
  numeric: true,
};
