/*
Inputs: dataset
Processes:-
- Extract dataset1, dataset2
- Calculate dataset1_mean, dataset2_mean
- Initiate di1_differences[], di2_differences[], correlation_numerator 
- Foreach dataset_item in dataset:
    - Calculate di1_difference, di2_difference
    - Add di1_difference, di2_difference to di1_differences, di2_differences respectively
    - Sum(di1_difference * di2_difference) to correlation_numerator
- Initiate di1_difference_sqr_sum, di2_difference_sqr_sum, correlation_denominator_sqr
- Foreach di1_difference in di1_differences:
    - Sum( sqr(di1_difference) ) to di1_difference_sqr_sum
- Foreach di2_difference in di2_differences:
    - Sum( sqr(di2_difference) ) to di2_difference_sqr_sum
- Calculate correlation_denominator_sqr = di1_difference_sqr_sum * di2_difference_sqr_sum
- Calculate correlation_denominator = sqrt(correlation_denominator_sqr)
- Calculate correlation = correlation_numerator / correlation_denominator
Output: correlation
*/

const dataset_mean = (dataset) => {
    const sum = dataset.reduce((acc, cur) => acc + cur);
    return sum/dataset.length;
};
const dataset_summation = (dataset) => dataset.reduce((acc, cur) => acc + cur);

exports.correlation = (dataset) => {
    const dataset1 = dataset.map(di=>di.di1);
    const dataset2 = dataset.map(di=>di.di2);
    const dataset1_mean = dataset_mean(dataset1);
    const dataset2_mean = dataset_mean(dataset2);
    const di1_differences = Array(), di2_differences = Array();
    let correlation_numerator = 0;
    dataset.forEach(dataset_item => {
        const di1_difference = dataset_item.di1 - dataset1_mean;
        const di2_difference = dataset_item.di2 - dataset2_mean;
        di1_differences.push(di1_difference);
        di2_differences.push(di2_difference);
        correlation_numerator += di1_difference * di2_difference;
    });
    
    const di1_difference_sqr_sum = dataset_summation( di1_differences.map(di1_difference => Math.pow(di1_difference,2)) );
    const di2_difference_sqr_sum = dataset_summation( di2_differences.map(di2_difference => Math.pow(di2_difference,2)) );
    const correlation_denominator_sqr = di1_difference_sqr_sum * di2_difference_sqr_sum;
    const correlation_denominator = Math.sqrt(correlation_denominator_sqr);
    
    return correlation_numerator / correlation_denominator;
};