import fetch from 'node-fetch';

async function arriaFetch() {
  const endpoint = 'https://nsat-3067.dev.arria.com/health/version.json';
  let response = await fetch(endpoint, {
    method: 'GET',
  });
  if (!response.ok) {
    throw new Error(`HTTP error. Status = ${response.status}`);
  } else {
    let data = await response.json();
    console.log(data.versionNumber);
  }
}

arriaFetch();
