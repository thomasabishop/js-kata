import {Octokit} from 'octokit';
import {ghToken} from '../api/credentials.js';

const octokit = new Octokit({auth: ghToken});

export default async function getGithubUserEvents() {
  let url = 'GET /users/sdras/events?per_page=100';
  let response = await octokit.request(url);
  response = response.data;
  return response;
  //console.log(response);
}

getGithubUserEvents();
