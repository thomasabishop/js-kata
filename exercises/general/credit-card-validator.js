
//testNum = '8939083993908392';
testNum = '8888888888188888'

var validator = 
{
    errors:
    {
        general: 'Card rejected because: ',
        length: 'card number has less than 16 digits',
        finalDigit: 'final digit must be even'
    },
    checkLength: function(arr) 
    {
        if (arr.length === 16)
        {
            return true;
        }
    },
    checkFinalDigit: function(digit)
    {
        if (digit % 2 === 0)
        {
            return true;
        }
        
    }
}

function validateCard(cardNumber)
{
    var cardArr = cardNumber.split("");
    var last = cardArr.length - 1;
    
    console.log(last);
    console.log(cardArr[last]);
    console.log( validator.checkFinalDigit(cardArr[last]) )


    if ( validator.checkLength(cardArr) )
    {

        if ( validator.checkFinalDigit(cardArr[last])) 
        {
            console.log('passed so far');
        }
        else 
        {
            console.log(validator.errors.general, validator.errors.finalDigit );
        }
    }
    else 
    {
        console.log(validator.errors.general, validator.errors.length)    
    }
}

//console.log(validateCard(testNum));

var arr = testNum.split("");
console.log(arr[0]);
var firstDigit = arr[0];

console.log(arr[15]);
for (var i = 1; i < arr.length; i++) 
{
    //console.log(i);
    
    if (arr[i] === firstDigit )
    {
        console.log("error");
    }
    else {
        console.log("pass");
    }

}
