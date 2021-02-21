/*
Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples:

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]
*/


let arrayA = [15,150];
let arrayB = [45, 75, 35];
const fakeArr = 'banana';

function tuck(arr1, arr2)
{
    const checkArr = (arr) => Array.isArray(arr);
    
    if ( checkArr(arr1) && checkArr(arr2) ) {
        return [arr1[0],...arr2, arr1[1]];
    }
    else {
        console.log('One or both arguments passed are not arrays');
    }
}
/*
console.log(
    tuck(arrayA, arrayB)
);
*/

for (var i =0; i <10; i++)
{
    console.log(i)
}

console.log('here is ');
