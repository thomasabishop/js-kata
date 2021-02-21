/*
 The world translator

- Write a function named `helloWorld` that:
    - takes 1 argument, a language code (e.g. "es", "de", "en")
    - returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
- Call that function for each of the supported languages and log the result to make sure it works.
*/

console.log('test');

var phraseBook = {
    en : 'Hello, world',
    es : 'Hola, el mundo',
    de : 'Hallo, Welt' 
}

function translate(lang)
{
    var selection = null;
    switch (lang)
    {
        case 'en' : selection = phraseBook.en; break;
        case 'es' : selection = phraseBook.es; break ;
        case 'de' : selection = phraseBook.de; break;
        default : selection = phraseBook.en; break;  
    }
    return selection;
}

console.log(translate('es'));
