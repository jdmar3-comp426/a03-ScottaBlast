import {removeKeyNonDestructive} from "./mild/mild_2.js";
let x = {name: "doge", purpose: "troy"};
console.log(removeKeyNonDestructive(x, "name"));
console.log(x);