export const add = (a, b = 0) => a + b;
export const subtract = (a, b = 0) => a - b;
export const multiply = (a, b = 1) => a * b;
export const divide = (a, b = 1) => (b === 0 ? NaN : a / b);
export const power = (a, b = 2) => Math.pow(a, b);
export const sqrt = (a) => Math.sqrt(a);
export const applyOperation = (operation, a, b) => operation(a, b);
