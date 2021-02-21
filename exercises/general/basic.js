/* 
https://hackernoon.com/javascript-practical-coding-challenges-for-beginners-4bq3ugr
*/

/*
Coding challenge #2: Print the odd numbers less than 100
*/

function printOdd()
{
    for ( var i = 0; i <= 100; i++ ) 
    {
        if ( i % 2 !== 0 ) 
        {
            console.log(i);
        }

    }
}

// printOdd();


/*
Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
*/

function multTables()
{
    for ( var table = 1; table <= 10; table++ ) 
    {
        for ( var multiplier = 1; multiplier <= 12; multiplier++ ) 
        {
            let output = table * multiplier;
            console.log(table + " x " + multiplier + " = " + output);
            
        }
    }
}


// multTables();

/*
Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
*/


var net = [];

function sumArr(accumulator, x)
{
 return accumulator + x;
}

function oddSum(){
    var i = 10;
    while (i < 30 )
    {
        if ( i % 2 !== 0 )
        {
            net.push(i);
        }
    i++;
    }
    console.log(net);
    console.log (net.reduce(sumArr,0));
}

//oddSum();

/*
Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
*/


var target = [5, 0, 10, 56, -3, 7, 10, -5 ];

function outputPositive(arr)
{
    let positiveInts = [];
    for ( var i = 0 ; i <= arr.length; i++ )
    {
        if ( arr[i] > 1 ) 
        {
            positiveInts.push(arr[i]);
        }
    }
    console.log(positiveInts);
}

//outputPositive(target);


/*
Coding challenge #17: Calculate the sum of digits of a positive integer number
*/

function sumDigits(int)
{
    let intString = int.toString();
    let intArr = intString.split("");
    let finArr = [];
    for (var i = 0; i < intArr.length; i++ )
    {
      finArr.push(parseInt(intArr[i]));
    }
    // console.log(finArr);
    intSum = finArr.reduce(sumArr,0);
    console.log(intSum);
    
}

//sumDigits(88);
