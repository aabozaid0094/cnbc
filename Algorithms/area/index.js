/*
Inputs: base, height
Processes:-
- Multiply base by height to get area
Output: area
*/
exports.parallelogramArea = (base, height) => base * height;
/*
Inputs: base1, base2, height
Processes:-
- Get average base by summing the two parallel bases and divide by 2
- Multiply average base by height to get area
Output: area
*/
exports.trapezoidArea = (base1, base2, height) => ((base1+base2)/2) * height;