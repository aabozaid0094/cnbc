const area = require('./area');
const correlation_dataset = require('./correlation/correlation_dataset');
const correlation = require('./correlation');

console.log("Parallelogram Area of base 10 and height 5:", area.parallelogramArea(10, 5));
console.log("Trapezoid Area of base1 10 and base2 8 and height 5:", area.trapezoidArea(10, 8, 5));
console.log("The following datasets:-");
console.table(correlation_dataset);
console.log("Have a correlation of:", correlation.correlation(correlation_dataset));