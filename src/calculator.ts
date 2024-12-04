export type Operation = (a: number, b?: number) => number;

export const add: Operation = (a, b = 0) => a + b;
export const subtract: Operation = (a, b = 0) => a - b;
export const multiply: Operation = (a, b = 1) => a * b;
export const divide: Operation = (a, b = 1) => (b === 0 ? NaN : a / b);
export const power: Operation = (a, b = 2) => Math.pow(a, b);
export const sqrt: Operation = (a) => Math.sqrt(a);

export const applyOperation = (
  operation: Operation,
  a: number,
  b?: number
): number => operation(a, b);
