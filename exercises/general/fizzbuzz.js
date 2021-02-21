function fizzbuzz()
{
    const century = new Array;
    const divThree = x => x % 3 == 0;
    const divFive = x => x % 5 == 0; 
    
    for (let i = 1; i<= 100; i++)
    {
        if ( divThree(i) && divFive(i) )
        {
            century.push('fizzbuzz');
        } 
        else if (divThree(i)) 
        {
            century.push('fizz');
        }
        else if (divFive(i))
        {
            century.push('buzz');
        }
        else{
            century.push(i);
        }
        
    }
    console.log(century);
}

//fizzbuzz();


function saySomething(speech, val)
{
    if (val === 1)
    {
        speech();
    }
    else
    {
        console.log('go away');
    }
    
}

function sayHello()
{
    console.log('hello');
}


//saySomething(sayHello, 1);
