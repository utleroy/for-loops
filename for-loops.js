// Increment by 10
// Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable's value is greater than 120.
// Example output:
// Current value is 5
// Current value is 15
// Current value is 25


for (var counter = 5; counter<=120; counter+=10) {
  var output = "current value is " + counter;
  output;

  console.log(output);
}

// Decrement by division
// Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.
// Example output:
// Current value is 4096
// Current value is 2048
// Current value is 1024

for (var i = 4096; i >=1; i = i / 2) {
  var output = "current value is " + i;
  output;

  console.log(output);
}

// Array iteration
// Create an array that contains the names of American Presidents. Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).
// Example output:
// President #1 was George Washington
// President #2 was John Adams
// President #3 was Thomas Jefferson

var President = ['George Washington', 'John Adams', "Thomas Jefferson"];
var number = [1,2,3];
for (var i = 0; i < President.length; i++) {
  var output = "President " + "#" + number[i] + " was " + President[i];

  console.log(output);
}

// Object iteration
// Use can use another kind of for loop to iterate over objects. Iterate over the object below and use console.log() to output the names of the keys in the object.
// var antSpecies = {
//   argentine: {},
//   army: {},
//   bigHeaded: {},
//   black: {},
//   bull: {},
//   carpenter: {},
//   crazy: {},
//   fire: {},
//   glider: {},
//   honeyPot: {},
//   jackJumper: {}
// }

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for(var key in antSpecies)

  console.log(key);





