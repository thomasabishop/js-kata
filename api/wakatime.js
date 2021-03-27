import fetch from 'node-fetch';
import btoa from 'btoa';
import { wakatimeToken as wakaToken } from './tokens.js';

//console.log(wakaToken);

class Request {
  constructor(endpoint, dataDescription) {
    this.endpoint = endpoint;
    this.dataDescription = dataDescription;
  }
  retrieveData() {
    return `${this.dataDescription}:  ${getWakatimeData(this.endpoint)}`;
  }
}

async function getWakatimeData(endpoint) {
  const rootEndpoint = `https://wakatime.com/api/v1/users/current/${endpoint}`;
  try {
    let response = await fetch(rootEndpoint, {
      headers: {
        authorization: `Basic ${btoa(wakaToken)}`,
      },
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      let data = await response.json();
      console.log(data);
      // return data;
      //data.forEach((repo) => console.log(repo.id));
    }
  } catch (error) {
    console.error(error);
  }
}

//getWakatimeData();
const allTime = new Request('all_time_since_today', 'All time since today');
const dataDump = new Request('data_dumps', 'Data dump:');

console.log(allTime.retrieveData());
console.log(dataDump.retrieveData());
