/*
var iffy = (function () { 
    console.log( 5 * 5);
})();
*/

const sumNumbers = (x, y) =>  x + y;
//console.log(sumNumbers(2,2));

//let result = 0;
const sumAndSquare = (x, y) => { 
    let result = x + y; 
    return result * 2 
};


//console.log(sumAndSquare(2,2));


/*
var sayHello = function () {
    console.log( 'hello!');
};
*/

//const sayHello = () => {console.log('hello?')};
const sayHello = () => console.log('hello?');
//sayHello();


//console.log(addTwo(3));

const printNames = (...names) => console.log(...names);
//printNames('thomas', 'martha', 'carrie');

//const square = x => x * 2;

//console.log(square(addTwo(3)));

/* with arrows */
const addTwo = x => x + 2;
const square = x => x * 2;

console.log( square(addTwo(3)));
