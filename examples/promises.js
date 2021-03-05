const fetch = require('node-fetch');

/* Manual Promise construction, without Fetch */

// function addTwo(n) {
//   return n + 2;
// }

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(addTwo(2)), 2000);
// });

// promise.then((value) => {
//   console.log('resolved with ' + value);
// });

// let anotherPromise = new Promise(function (resolve, reject) {
//   resolve(addTwo(null));
//   reject('there has been a problem');
// });

// anotherPromise.then((value) => console.log('resolved with ' + value));
async function getUserLocation() {
  let response = await fetch('https://api.github.com/users/thomasabishop');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  } else {
    let data = await response.json();
    console.log(data.location);
  }
}

getUserLocation().catch(function (error) {
  console.log(error);
});

async function queryResponse() {
  try {
    let response = await fetch('https://api.github.com/users/thomasabishop');
    let data = await response.json();
    let location = data.location;
    console.log(location);
  } catch (error) {
    console.log(error);
  }
}
queryResponse();

async function abstractRetrieval(resource, interfaceMethod) {
  let response = await fetch(resource);
  let content;
  if (!response.ok) {
    throw new Error(`ERROR! Status: ${reponse.status}`);
  } else {
    if (interfaceMethod === 'JSON') {
      content = await response.json();
    } else if (interfaceMethod === 'text') {
      content = await response.text();
    }
    return content;
  }
}

async function largeData() {
  const src = 'https://api.github.com/users/thomasabishop';
  let username = abstractRetrieval(src, 'JSON');
  let location = abstractRetrieval(src, 'JSON');
  let values = await Promise.all([username, location]);
  console.log(values);
}

largeData().catch((error) => console.log(error));
