var sayA = require('a');
var sayB = require('b');
var sayMaster = require('master');

console.log('master', sayMaster.says());
console.log('a', sayA.says());
console.log('b', sayB.says());
