import { PatternSetting } from '../lib/interface';

const example1: PatternSetting = {
  pattern: {
  'lowercase': true,
  'regexp': /[a-zA-Z0-9\W_]+/g,
  'uppercase': true,
  'special': true,
  'numeric': true,
  }
};
