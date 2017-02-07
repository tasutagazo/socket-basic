var moment = require('moment');
var now = moment();

console.log(now.format());

now.subtract(1, 'year');
// console.log(now.format('X'));
// console.log(now.format('x'));
// console.log(now.valueOf());

var timestamp = 1454830121331;
var timestampMoment = moment.utc(timestamp); 
	
console.log(timestampMoment.local().format('h:mm a'));

// console.log(now.format());
// console.log(now.format('Do MMM YYYY, h:mma')); //7th Feb 2017 3.12pm