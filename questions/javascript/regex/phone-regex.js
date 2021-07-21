// Copilot was given "const phone"
const phoneRegex = /^(\+\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

// Copilot guessed this on its own, including the "true" comments
phoneRegex.test('+1 (555) 555-5555'); // true
phoneRegex.test('555-555-5555'); // true
phoneRegex.test('(555) 555-5555'); // true
phoneRegex.test('555 555 5555'); // true
phoneRegex.test('555.555.5555'); // true