/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    return `${a} + ${b} = ${a+b}`;
}


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    var pos = startNumber;
    var result = [];
    for(let i = startNumber; i<=endNumber; i++) {
        result[i-startNumber] = i;
    }
    return result;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
    let result = new Object;
    result.max=Number.NEGATIVE_INFINITY;
    result.min=Number.POSITIVE_INFINITY;
    for(let i = 0; i < numbers.length; i++)
    {
        if(numbers[i] > result.max)
        //    result.max = parseInt(numbers[i], 10);
            result.max = numbers[i];
        if(numbers[i] < result.min)
            result.min = parseInt(numbers[i], 10);
    }
    return result;

    
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    //for loop
    //for the element at index i,
    //if a key for it exists in object result, increment that key. otherwise, create a new key initialized to 1.
    let result = new Object();
    for(let i = 0; i < array.length; i++)
    {
        if((Object.keys(result)).indexOf(`${array[i]}`) == -1) //if the current value doesn't exist in result
            result[array[i]] = 1;
        else
            result[array[i]]++;
    }
    return result;
}
