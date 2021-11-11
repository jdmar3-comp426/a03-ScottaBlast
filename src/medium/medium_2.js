import mpg_data from "./data/mpg_data.js";
import {getStatistics} from "./medium_1.js";

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
let city = 0, hwy = 0, allyear = 0, hybrid = 0, notHybrid = 0;
let yearArray = [];
    for(let i = 0; i < mpg_data.length; i++)
    {
        city+= mpg_data[i].city_mpg;
        hwy += mpg_data[i].highway_mpg;
        yearArray.push(mpg_data[i].year);
        if(mpg_data[i].hybrid)
            hybrid+=1;
    }
    city = city/mpg_data.length;
    hwy = hwy/mpg_data.length;

export const allCarStats = {
    avgMpg: {city: city, highway: hwy},
    allYearStats: getStatistics(yearArray),
    ratioHybrids: (hybrid/mpg_data.length),
};
 
let hasMakeIndex = 0;
let makerHybrids = [];
function hasMake(makerHybrids, mpg_data, i)
{
    for(let j = 0; j < makerHybrids.length; j++)
    {
        if(makerHybrids[j].make === mpg_data[i].make) //if any of makerhybrids has the same make as currently, we don't need to make a new one.
        {
            hasMakeIndex = j;
            return true;
        }
    }
    return false;
}
function hasYear(years, mpg_data, i)
{   
    let yArray = Object.keys(years);
    for(let j = 0; j < yArray.length; j++)
    {
        if(yArray[i] === mpg_data[i])
        return true;
    }
    return false;
}
//for all cars current
for(let i = 0; i < mpg_data.length; i++)
{
    //if current is hybrid
    if(mpg_data[i].hybrid)
    {
            //check if makerhybrids already has it.
            if(hasMake(makerHybrids, mpg_data, i))
            {
                //if so, increment
                makerHybrids[hasMakeIndex].hybrids.push(mpg_data[i].id);
                //and check array position.
        
                for(let k = hasMakeIndex-1; k >= 0; k--)
                {
                    if(makerHybrids[k].hybrids.length >= makerHybrids[hasMakeIndex].hybrids.length)
                    {
                        makerHybrids.splice(k + 1, 0, makerHybrids[hasMakeIndex]);
                        makerHybrids.splice(hasMakeIndex + 1, 1);
                        break;
                    }
                    if(k === 0)
                    {
                        makerHybrids.splice(k, 0, makerHybrids[hasMakeIndex]);
                        makerHybrids.splice(hasMakeIndex + 1, 1);
                        break;
                    }
                }
            }
            else
            {
                makerHybrids.push({make: mpg_data[i].make, hybrids: [mpg_data[i].id]});
            }
        }
    }

    /*
    if makerhybrids doesnt have an object with the
    current make, and the current car is a hybrid,
    make a new object with a key value pair
    "make": make. Add the current car's id to an array under
    the "hybrids" key once initiated.

    if the current make already exists, add this car to the
    array under the key "hybrids". Then, compare the length
    of this object's "hybrids" array to the length of the ones
    before it. if it is bigger than one, place it before that
    object.

    */
/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 * 
 * like before, whenever we see a new year, we add it and instantiate it.
 * when instantiating a year, create 2 keys, hybrid and nonhybrid.
 * within each of those, create 4 keys, city, citynum, highway, highwaynum.
 * citynum and highwaynum are temporary values used to keep track of how many cars have been added.
 * 
 * whenever you add a car that already has a year, update the matching city, highway, citynum, and highwaynum values respectively.
 * 
 * at the end, go through all the years, calculating the averages and deleting the temporary keys.
 * 
 */
 let years = new Object();
 for(let i = 0; i < mpg_data.length; i++)
 {
    // instantiate a new year
    if(years[mpg_data[i].year] === undefined)
    {
        years[mpg_data[i].year] = {hybrid: {city: 0, highway: 0, num: 0},
                                notHybrid: {city: 0, highway: 0, num: 0}};
    }
    if(mpg_data[i].hybrid)
    {
        years[mpg_data[i].year].hybrid.city += mpg_data[i].city_mpg;
        years[mpg_data[i].year].hybrid.highway += mpg_data[i].highway_mpg;
        years[mpg_data[i].year].hybrid.num += 1;
    }
    else
    {
        years[mpg_data[i].year].notHybrid.city += mpg_data[i].city_mpg;
        years[mpg_data[i].year].notHybrid.highway += mpg_data[i].highway_mpg;
        years[mpg_data[i].year].notHybrid.num += 1;
    }

 }
 //loop through all years doing the cleanup and calculations
let yKeys = Object.keys(years);
for(let i = 0; i < yKeys.length; i++)
{
    years[yKeys[i]].hybrid.city = years[yKeys[i]].hybrid.city / years[yKeys[i]].hybrid.num;
    years[yKeys[i]].hybrid.highway = years[yKeys[i]].hybrid.highway / years[yKeys[i]].hybrid.num;
    delete (years[yKeys[i]].hybrid).num;

    years[yKeys[i]].notHybrid.city = years[yKeys[i]].notHybrid.city / years[yKeys[i]].notHybrid.num;
    years[yKeys[i]].notHybrid.highway = years[yKeys[i]].notHybrid.highway / years[yKeys[i]].notHybrid.num;
    delete (years[yKeys[i]].notHybrid).num;
}
export const moreStats = {
    makerHybrids: makerHybrids,
    avgMpgByYearAndHybrid: years
};
