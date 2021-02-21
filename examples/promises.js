const fetch = require("node-fetch");
const axios = require("axios").default;

function githubUserLocation(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response;
      }
    })
    .then((response) => response.json())
    .then((data) => console.log(`${username} hails from ${data.location}`))
    .catch((err) => console.error(err));
}
//githubUserLocation("thomasabishop");

function githubUserLocationTwo(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then(function (response) {
      response.json().then(function (data) {
        console.log(data.location);
      });
    })
    .catch((err) => console.error(err));
}

//githubUserLocationTwo("thomasabishop");

async function githubUserLocationAsync(username) {
  try {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();
    if (!response.ok) {
      throw new Error(`Error. Status: ${response.status}`);
    } else {
      let location = data.location;
      console.log(location);
    }
  } catch (error) {
    console.log(error);
  }
}

//githubUserLocationAsync("thomasabishop").catch((error) => console.error(error));

/* 
 githubUserLocationAsync("thomasabishop").then(function (data) {
  console.log(data.location);
});  */

/* function githubUserLocationAxios(username) {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));
} */

async function githubUserLocationAxios(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(response.data.location);
  } catch = (error) => {
    console.error(error);
  }
}

githubUserLocationAxios("thomasabishop");
