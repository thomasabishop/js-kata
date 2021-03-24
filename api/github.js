const fetch = require('node-fetch');
const accessToken = '44f43b84f20f10834a01d568f6eea603d730f9c1';

/**
 * Retrieve specified resource
 * @param {string} auth - GitHub personal access token
 * @param {string} resource - Resource path, e.g. 'location', if none specified, return endpoint
 */

async function getGithubData(auth, resource) {
  const rootEndpoint = 'https://api.github.com';
  let path;
  resource !== undefined
    ? (path = `/users/thomasabishop/${resource}`)
    : (path = '/users/thomasabishop');
  const request = rootEndpoint + path;
  try {
    let response = await fetch(request, {
      headers: {
        authorization: `token ${auth}`,
      },
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      let data = await response.json();
      console.log(data[2]);
    }
  } catch (error) {
    console.error(error);
  }
}

//getGithubData(accessToken, 'location', true);
//getGithubData(accessToken, 'public_repos');
console.log(getGithubData(accessToken, 'repos'));

// How to distinguish properties that come of the endpoint, like location ?

// function testDataHandling(...arr) {
//   console.log(arr[0]);
// }

//testDataHandling(getGithubData(accessToken, 'repos'));
