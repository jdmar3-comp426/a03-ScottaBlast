import {repeatDemo, tenTimesFifty, someEven, everyEven, hello, filter, tenTimes} from "./spicy/spicy_9.js";


    console.log(filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y'));
//       -->  { pass: ['yes', 'yellow'], fail: ['nope', 'maybe'] }
    console.log(filter([1, 90, 5, 31], x => x % 2 === 1));
//       -->  { pass: [1, 5, 31], fail: [90] }