const brain = require("brain.js");

const network = new brain.NeuralNetwork();

// First example, Basic Machine learning if the first number is 1 the outcome
// should be one else should be 0

// network.train([
//   { input: [0, 0, 0], output: [0] },
//   { input: [0, 0, 1], output: [0] },
//   { input: [0, 1, 1], output: [0] },
//   { input: [1, 0, 1], output: [1] },
//   { input: [1, 1, 1], output: [1] },
// ]);

network.train([
  { input: [0, 0, 0], output: [0] },
  { input: [0, 0, 1], output: [0] },
  { input: [0, 1, 1], output: [0] },
  { input: [1, 0, 1], output: [1] },
  { input: [1, 1, 1], output: [1] },
]);

const output = network.run([1, 0, 0]);

console.log(`Prob: ${output}`);
