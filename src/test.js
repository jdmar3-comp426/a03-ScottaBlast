import { maxAndMin, sumToString, countArray } from "./mild/mild_1.js";
import { identifyVariable, identifyArray, removeKeyNonDestructive, removeKeys } from "./mild/mild_2.js";
/*
console.log(maxAndMin([1, 2, 6, 3, 0, -5, 77, 44]));
console.log(countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));
*/
/*
console.log(identifyVariable({foo: 42, bar: 75}));
console.log(identifyVariable(42));
console.log(identifyVariable("75"));
console.log(identifyArray(['some', 3, [3, 4], false]));
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
obj = removeKeyNonDestructive(obj, 'password');
console.log(obj);
*/
let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object not looks like this
 //{ name: 'Mr. Boss', title: 'boss' }
 console.log(obj);