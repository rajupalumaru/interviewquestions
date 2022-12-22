

//map 
let arrOne = [32, 45, 63, 36, 24, 11]
const multFive = (num) => {
return num * 5; //'num' here, is the value of the array.
}
let arrTwo = arrOne.map(multFive)
console.log(arrTwo)

//filter

let arrNum = [15, 39, 20, 32, 30, 45, 22]
function divByFive(num) {
  return num % 3 == 0
}
let arrNewNum = arrNum.filter(divByFive)
console.log(arrNewNum)

//reduce

let arrNum1 = [15, 39, 20, 32, 30, 45, 22]
function sumOfEle(num, ind) {
  return num + ind;
}
let arrNum2 = arrNum1.reduce(sumOfEle)
console.log(arrNum2)


// //////////////////////////////////////////////////
// Data Transfromation: Map, Filter and Reduce

// Map----->
// * Applies callback function for the current array and puts it into a new array. Example multiply each element in array and put it in new array

// Filter----->
// * Filter returns a new array containing array elements that matches a specified condition

// Reduce----->
// * Reduces all the elments in an array into a single value.

// --------------
// == Map Method ===
const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 74;
// Recommended the functional programing which is modren way
const transactionsInr = transactions.map(function(trans) {
    return (trans / inrtToUsd).toFixed(2);
});
console.log(transactions);
console.log(transactionsInr);

// Same with arrow 
const transactionsInrArrow = transactions.map(trans => (trans / inrtToUsd).toFixed(2));
console.log(transactionsInrArrow);

// Same with for Of
const transactionsInr2 = [];
for(const trans of transactions) transactionsInr2.push((trans / inrtToUsd).toFixed(2));
console.log(transactionsInr2);

/*const transDescriptions = transactions.map((trans, i, arr) => {
    if(trans > 0)
        return `Transaction ${i + 1}: You deposited: ${trans}`;
    else
        return `Transaction ${i + 1}: You withdrew: ${Math.abs(trans)}`;
});*/
const transDescriptions = transactions.map((trans, i) => {
        return `Transaction ${i + 1}: You ${ trans > 0 ? 'deposited' : 'withdrew'}: ${trans}`;
});
console.log(transDescriptions);

// ------------------------------------------------
// == Filter Method ===
// like forEach the below also having index and current arr
const deposits = transactions.filter(function(trans) {
    return trans > 0;
});
console.log(deposits);

// Filter with for of loop
const deposits2 = [];
for(const trans of transactions) {
    if(trans > 0) deposits2.push(trans);
} 
console.log(deposits2);

// With Arrow function
const withdrawls = transactions.filter(trans => trans < 0);
console.log(withdrawls);

// ------------------------------------------------
// == Reduce Method ===
const balance = transactions.reduce(function(accumulator, currentVal, index, curArray) {
    return accumulator + currentVal;
},0); // 0 is the accumulator default value
console.log(balance);

// Using for of 
let balance2 = 0;
for(const trans of transactions) balance2 += trans;
console.log(balance2);

const boolVals = [true, false, true, true]; 
// To verify if all the values are valid
const isTrue = boolVals.reduce(function(accumulator, currentVal, index, curArray) {
    console.log(accumulator, currentVal, index, curArray);
    return accumulator && currentVal;
},true); // true is the accumulator default value
console.log(isTrue)

// ------------------------------------------------
// == Chaining Methods ===

const inrtToUsd2 = 74;
const totDepositsInUsd = transactions
.filter(trans => trans > 0)
.map(trans => Number((trans / inrtToUsd2).toFixed(2)))
.reduce((acc, trans) => acc + trans, 0);
console.log(totDepositsInUsd);

// ------------------------------------------------
// == ES6: Find Method ===
// Unlike filter it returns the first element in an array that satisfy the condition
const firstWithdrawl = transactions.find(trans => trans < 0);
console.log(firstWithdrawl);

// ------------------------------------------------
// == ES6: findIndex Method ===
const firstWithdrawlIndex = transactions.findIndex(trans => trans < 0);
console.log(firstWithdrawlIndex);

// ------------------------------------------------
// == some and every Method ===

// Equality Check
console.log(transactions.includes(1000));

// Some: Conditon Check: To get true or false based on a condition -
const anyDeposit = transactions.some(trans => trans > 0);
console.log(anyDeposit);

// Every: Conditon Check: To get true if every element matches the condition
console.log(transactions.every(trans => trans > 0));

// Seperate callback
const deposit = trans => trans > 0;
console.log(transactions.every(deposit));
console.log(transactions.some(deposit));
console.log(transactions.filter(deposit));

// ------------------------------------------------
// == ES 2019: flat and flatMap Method ===

// flat works for one level deep
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

// flat works for multi level when we give depth
const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat()); // Default 1
console.log(arrDeep.flat(2));

// flat map by combining map and flat 
let arr1 = ["JS Demo for LWC", "", "Bangalore"];

console.log(arr1.map(x => x.split(" ")));
// [["JS","Demo","for", "LWC"],[""],["Bangalore"]]

console.log(arr1.flatMap(x => x.split(" ")));
// ["JS","Demo","for", "LWC","","Bangalore"]

