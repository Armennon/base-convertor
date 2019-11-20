const reader = require('readline-sync');
const util = require('./convertor.js');

let number = reader.questionInt("Insert the number = ");

console.log(util.convertToBinary(number));
console.log(util.convertToHexa(number));