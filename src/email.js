// An UNtested module — the subject for the `generate` verb, which should write a
// runnable test suite for this public boundary. Deliberately ships with no
// adjacent test file.
function validateEmail(input) {
  if (typeof input !== "string") {
    return false;
  }
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.trim());
}

function normalizeEmail(input) {
  if (typeof input !== "string") {
    throw new TypeError("email must be a string");
  }
  return input.trim().toLowerCase();
}

module.exports = { validateEmail, normalizeEmail };
