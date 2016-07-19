
for (var counter = 5; counter<=120; counter+=10) {
  var output = "current value is " + counter;
  output;

  console.log(output);
}

for (var i = 4096; i >=1; i = i / 2) {
  var output = "current value is " + i;
  output;

  console.log(output);
}

var President = ['George Washington', 'John Adams', "Thomas Jefferson"];
var number = [1,2,3];
for (var i = 0; i < President.length; i++) {
  var output = "President " + "#" + number[i] + " was " + President[i];

  console.log(output);
}


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