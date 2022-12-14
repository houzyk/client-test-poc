import { describe, expect, test } from '@jest/globals';
import example from "../src/example/example";

describe('Example Test Suite', () => {
  test('should pass 1', () => {
    expect(example(1)).toBe(1);
  });

  test('should pass 2', () => {
    expect(example('')).toBe('');
  });

  test('should pass 3', () => {
    expect(example(true)).toBe(true);
  });

  test('should pass 4', () => {
    expect(example('_')).toBe('_');
  });

  test('should fail 5', () => {
    expect(example('__')).toBe('');
  });
});