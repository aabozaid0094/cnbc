/*
Minimum function
inputs: ...nums
steps:
- let minimum be the maximum possible number
- foreach num of nums
-- if num < minimum then set minimum to num
- return minimum
*/
exports.min = function min(...nums) {
    let minimum = Number.POSITIVE_INFINITY;
    for (let index = 0; index < nums.length; index++)
        if (nums[index] < minimum)
            minimum = nums[index];
    return minimum;
}

/*
Two Sets Difference function
input: ...first_set, ...second_set
steps:
- create empty result array
- foreach element of first_set
-- if second_set includes element then add element to result
- return result
*/
exports.twoSetsDifference = function twoSetsDifference(first_set, second_set) {
    const result = [];
    for (let index = 0; index < first_set.length; index++)
        if (!second_set.includes(first_set[index]))
            result.push(first_set[index]);
    return result;
}