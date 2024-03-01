
/* Concatination 
with arrays 
concat(value1,value2,...valueN)
*/

const c1 = [1, 2, 3, 4, 5]
const c2 = [1, 'a', 'j', 6, 9, 0]

// console.log(c1.concat(c2))





/* copyWithin 
with arrays 
copyWithin(target,start,end)
*/

const cw1 = ['a', 'b', 'c', 1, 2, 3]
// console.log(cw1.copyWithin(0,3,5)) 






/* Array.entries()
returns an iterator with key/value pairs of each index */

const entryArr = [1, 2, 3, 'a', 'b'];
const iterator1 = entryArr.entries();
// console.log(iterator1.next().value)







/* Array.every goes through all elements based on the condition
 in callback function and returns a boolean */

const everyArr = [1, 2, 3, 4, 'a', 'b', 5, 6, 7]
const checkForNumber = (value) => typeof value === "number";
//  console.log(everyArr.every(checkForNumber))






/* Array.filter goes through all elements based on the condition
 in the callback function and returns a filtered array */

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
// console.log(result);






/* Array.find goes through all elements based on the condition
 in the callback function and returns the first finding result */

const findArr = [5, 12, 8, 130, 44];
const found = findArr.find((element) => element > 10);
// console.log(found);






/* Array.findIndex goes through all elements based on the condition
 in the callback function and returns the first finding result index */

const findIndexArr = [5, 12, 8, 130, 44];
const foundIndex = findIndexArr.findIndex((element) => element > 10);
// console.log(foundIndex);





/* Array.findLast goes through all elements in reverse order based on the condition
 in the callback function and returns the first finding result */

const findLastArr = [5, 12, 8, 130, 44];
const foundFirst = findLastArr.findLast((element) => element > 10);
//  console.log(foundFirst);





/* Array.findLastIndex goes through all elements in reverse order based on the condition
 in the callback function and returns the first finding result index */

const findLastArrIndex = [5, 12, 8, 130, 44];
const foundFirstIndex = findLastArrIndex.findLastIndex((element) => element > 10);
//  console.log(foundFirstIndex);








/* Array.flat creates a new array with all the sub-array 
elements concatenated into it recursively up to the specific depth 
Array.flat(<depth>), if not sure of the depth you can give depth = Infinity
*/

const flatArray = [0, 1, 2, 3, [4, 5, 6, [7, 8, 9], [10, 11, 12]]]
// console.log(flatArray.flat(Infinity))








/* Array.flatMap method returns a new array formed by applying a given 
callback function to each element of the array, and then flattening the result by one level depth.

This is slightly more effiecient than calling map and flat seperately.
*/

const flatMapArray = [1, 4, 1];
const flatMapCondition = (value) => (value === 4 ? [1, 1, [1, 1]] : 1)
// console.log(flatMapArray.flatMap(flatMapCondition))







/* Array.from creates a new, shallow-copied
 array instance from an iteratable-array like object.
 
 Array.from(<arrayLike>,mapFn) something like this 
 Array.from([1,2,3],(x)=>x+x)
 */
const arrFrom = Array.from("Ganesh")
// console.log(arrFrom)
// console.log(Array.from([1,2,3]))





/* Array.fromAsync iterates the async iterable in a very fashion.
very similar to await .

Array.fromAsync(arrayLike,mapFn)
*/

// const asyncIterable = (async function* () {
//     for (let i = 0; i < 5; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 10 * i));
//       yield i;
//     }
//   })();
//   console.log(asyncIterable)
  
//   Array.fromAsync(asyncIterable).then((array) => console.log(array));





/* Array.includes method determines whether
 an array includes a certain value and return a boolean value .
 Array.includes(searchElement)
 Array.includes(searchElement, fromIndex)

 */

const includeArr = [1,2,3,4,98]
// console.log(includeArr.includes(9))






/* Array.indexOf method returns the first
 index at which given given element can be found */

 const indexOfArr = ['ant', 'bison', 'camel', 'duck', 'bison'];
//  console.log(indexOfArr.indexOf('bison'));


/* Array.isArray checks  if it's an array or not */
// console.log(Array.isArray([1, 3, 5]));


/* Array.join returns a new string by 
concatenating all of the elements */
const joinElements = ['Fire', 'Air', 'Water'];
// console.log(joinElements.join('/'))



/* Array.keys return a new array iterator object with keys */

const keysArr = ['a', 'b', 'c'];
const iterator = keysArr.keys();
// console.log(iterator)
// for (const key of iterator){
//     console.log(key)
// }


/* Array.value return a new array iterator object with values */

const keysArr1 = ['a', 'b', 'c'];
const iterator2 = keysArr1.values();
// console.log(iterator)
// for (const value of iterator2){
//     console.log(value)
// }


/* Array.map returns a new array based on the condition in callback function */
const mapArr = [1,4,9,16]
const mutliplier = (value)=> value*2;
// console.log(mapArr.map(mutliplier)) 


/* Array.of returns a new array regardless of number or type of args */

// console.log(Array.of('foo','bar',2,true))


/* Array.pop */
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

// console.log(plants.pop());

/* Array.push */
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');



/* Array.reduce method executes a user supplied 
reducer callback function 

Array.reduce(callbackFn)
Array.reduce(callbackFn,initialValue)

*/

const reducerArr =  [1,2,3,4,5];
const sumWithInitialValue   = (accumulator,currentValue)=> accumulator+currentValue
// console.log(reducerArr.reduce(sumWithInitialValue,0))


/* Array.reverse reverses the array with mutating the original array.
To form a new array use .toReversed.
*/
const arr = ['one', 'two','third'];
// console.log(arr.reverse())



/* Array.shift removes first element from the array and returns it */
const shiftArr = [12,23,45,56]
// console.log(shiftArr.shift())


/* Array.slice returns a shallow copy
 of a portion of an array into new array.
 slice()
 slice(start)
 slice(start, end)
 */

 const sliceArr = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//  console.log(sliceArr.slice(1,5))


/* Array.sum tests whether at least one element
 in the array passses the test in call back function and returns a boolean
 some(cb,args..)
 */

 const someArr = [23,34,56,78,89];
 const calculate = (value)=> value%2===0;
//  console.log(someArr.some(calculate))



/* Array.sort sorts the elements  and return the same array */

const names = ['Ganesh','Alex' ];
const sortNums = [98,56,78]
// console.log(sortNums.sort((a,b)=>a-b))



/* Array.splice changes the contents of an
 array by removing or replacing the existying elements 
 splice(start)
 splice(start,deleteCount)
 Below Item is to insert into an array
 splice(start,deletCount,item1,.....)
 */

 const months  = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'Feb')
// console.log(months)


/* Array.toLocaleString returns a string representing the elements of the array */
const dateValue  = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = dateValue.toLocaleString('en', { timeZone: 'UTC' });
// console.log(localeString)


/* Array.unshift adds the specified elements to the 
beginning of an array and return a new length of an array */

const unshiftArr = [1,3,4,56]
unshiftArr.unshift(-1,0)
// console.log(unshiftArr)


/* Array.with changes a value with a given index and returns a new array */

const withArr = [1, 2, 3, 4, 5];
// console.log(withArr.with(2, 6));




















