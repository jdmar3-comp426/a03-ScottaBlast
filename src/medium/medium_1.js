import {variance} from "./data/stats_helpers.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array)
{
    let result = 0;
    for(let i = 0; i < array.length; i++)
    {
        result+=array[i];
    }
    return result;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
if(array.length == 0)
    return;

array.sort((a,b) => a - b);

 if(array.length % 2 == 0) // if even
    return (array[Math.floor(array.length/2)] + array[Math.floor(array.length/2) -1]) / 2;  // return the average of the 2 in the middle

return (array[Math.floor(array.length/2)]); // since it is odd, return the element in the middle
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array)
{
    let result = new Object();
    result.length = array.length;
    result.sum = 0;
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] > result.max)
            result.max = array[i];
        if(array[i] < result.min)
            result.min = array[i];
        result.sum += array[i];
    }
    result.mean = result.sum / array.length;
    result.median = getMedian(array);
    result.min = Number.POSITIVE_INFINITY;
    result.max = Number.NEGATIVE_INFINITY;
    result.variance = variance(array, result.mean);
    result.standard_deviation = Math.sqrt(result.variance);
    return result;
    /*
    min, must loop !
    median, constant !
    max, must loop !
    variance, constant
    mean, constant !
    length, constant !
    sum, must loop !
    standard deviation, constant, square root of variance !
    */
}