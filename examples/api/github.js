// import { ghPersonalAccessToken as token } from './tokens.js';
import fetch from 'node-fetch';

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
      return data;
      //data.forEach((repo) => console.log(repo.id));
    }
  } catch (error) {
    console.error(error);
  }
}

function nextStage(asyncFunct) {
  asyncFunct.then((data) => {
    data.forEach((datum) => console.log(datum.name));
  });
}

nextStage(getGithubData(token, 'repos'));
