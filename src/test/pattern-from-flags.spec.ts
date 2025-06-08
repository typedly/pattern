import { PatternFromFlags } from '../lib/type';

const example1: PatternFromFlags<
  true, // Lowercase
  true, // Uppercase
  true, // Digit
  false // Special
> = "[a-zA-Z0-9]+";
