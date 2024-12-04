import {
  add,
  subtract,
  multiply,
  divide,
  power,
  sqrt,
  applyOperation,
} from './calculator.js';
const display = document.getElementById('display');
let currentInput = '';
let storedValue = 0;
let pendingOperation = null;
const updateDisplay = (value) => {
  display.value = value;
};
const handleNumber = (num) => {
  currentInput += num;
  updateDisplay(currentInput);
};
const handleOperation = (operation) => {
  if (currentInput) {
    storedValue = parseFloat(currentInput);
    currentInput = '';
  }
  pendingOperation = operation;
};
const handleEquals = () => {
  if (pendingOperation && currentInput) {
    const result = applyOperation(
      pendingOperation,
      storedValue,
      parseFloat(currentInput)
    );
    updateDisplay(result.toString());
    currentInput = result.toString();
    pendingOperation = null;
  }
};
const handleClear = () => {
  currentInput = '';
  storedValue = 0;
  pendingOperation = null;
  updateDisplay('');
};
document.querySelectorAll('button').forEach((button) => {
  const value = button.getAttribute('data-value');
  const action = button.getAttribute('data-action');
  if (value) {
    button.addEventListener('click', () => handleNumber(value));
  } else if (action) {
    button.addEventListener('click', () => {
      switch (action) {
        case 'add':
          handleOperation(add);
          break;
        case 'subtract':
          handleOperation(subtract);
          break;
        case 'multiply':
          handleOperation(multiply);
          break;
        case 'divide':
          handleOperation(divide);
          break;
        case 'power':
          handleOperation(power);
          break;
        case 'sqrt':
          if (currentInput) {
            const result = sqrt(parseFloat(currentInput));
            updateDisplay(result.toString());
            currentInput = result.toString();
          }
          break;
        case 'equals':
          handleEquals();
          break;
        case 'clear':
          handleClear();
          break;
      }
    });
  }
});
