/*
Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this challenge  y isn't considered a vowel.
*/

let comment = "This website is for losers LOL!";
let vowels = ["a", "e", "i","o", "u" ];
let words = comment.split(" ");

console.log(words);
let testMatch = words[0].split("");
let testMatch2 = words[1].split("");
//console.log(testMatch.length);
console.log(testMatch.includes("i"));


function filter(subArr)
{
    for ( var i = 0; i <= vowels.length; i++ )
    {
        if (subArr.includes(vowels[i])) 
        {
            var x = subArr.indexOf(vowels[i]);
            subArr.splice(x, 1);
            console.log(subArr);

        }
        else 
        {

        }
    }
}

filter(testMatch2);
//filter(testMatch2);



/*
var newArr = testMatch.filter(function(a){return a !== "i"});
console.log(newArr);
*/