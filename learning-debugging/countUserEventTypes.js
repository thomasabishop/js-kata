import getGithubUserEvents from './getGithubUserEvents.js';

async function countUserEventTypes() {
  const userEventTypeFrequency = {
    totalContributions: 0,
  };

  let response = await getGithubUserEvents();

  userEventTypeFrequency.totalContributions = response.length;

  for (const entry of response) {
    userEventTypeFrequency[entry.type] = (userEventTypeFrequency[entry.type] || 0) + 1;
  }
  console.log(userEventTypeFrequency);

  //return frequencyCounter;
}

countUserEventTypes();
