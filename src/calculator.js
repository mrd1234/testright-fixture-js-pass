// A small, fully-tested module — the subject for the `run` verb (a green suite)
// and the `convert` verb (Jest -> Vitest migration).
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("division by zero");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
