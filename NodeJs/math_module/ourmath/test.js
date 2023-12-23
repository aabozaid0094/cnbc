const customMath = require('./index.js');
let minimum = customMath.min(50, 20, 90);
console.log(minimum, " :- ", minimum===20?"min success":"min fail");

let Difference = customMath.twoSetsDifference([1, 2, 3], [4, 2, 6]);
console.log(Difference, " :- ", Difference[0]===1&&Difference[1]===3?"Difference success":"Difference fail");