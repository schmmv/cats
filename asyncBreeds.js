const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) print(data);
  });
};

const print = function(data) {
  console.log('Return Value: ', data);
};
breedDetailsFromFile('Bombay', print);
// console.log('Return Value: ', bombay);