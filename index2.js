const brain = require("brain.js");
const data = require("./data.json");

const network = new brain.recurrent.LSTM();

const trainingData = data.map((item) => ({
  input: item.text,
  output: item.category,
}));

network.train(trainingData, {
  iterations: 200,
});

const output = network.run("I fixed the power supply");

console.log(`Category: ${output}`);
// What we did here is we gave some data to our brain and we train in to understand
// if this data isthe follwoing output: Category = software || hardware
// If our output is similar with our sample data will give us back the corret output
