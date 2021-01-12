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

// const output = network.run([1, 0, 0]);
// console.log(`Prob: ${output}`);

///////////////

// This example is a bit more advanced, lets say the numbers represent teams, If team 1 won then the outcome is 1
//  else is 0. A bit more hard. We are trying now to teach the machine how to predict a winner

network.train([
  { input: [1, 2], output: [1] }, // Team 2 wins
  { input: [1, 3], output: [1] }, // Team 3 wins
  { input: [2, 3], output: [0] }, // Team 2 wins
  { input: [2, 4], output: [1] }, // Team 4 wins
  { input: [1, 4], output: [0] }, // Team 1 wins
  { input: [1, 3], output: [0] }, // Team 1 wins
  { input: [3, 4], output: [0] }, // Team 3 wins
]);

const output = network.run([1, 4]);

console.log(`Prob: ${output}`);
