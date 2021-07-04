import { Octokit } from "octokit"
import { ghToken } from "./credentials.js"
import frequencyCounter from "./frequencyCounter.js"
const octokit = new Octokit({ auth: ghToken })

async function contributions() {
  let url = "GET /repos/thomasabishop/js-kata/contributors"
  let c = await octokit.request(url)
  console.log(c)
}

//contributions()

async function userEvents() {
  let url = "GET /users/sdras/events?per_page=100"
  let response = await octokit.request(url)
  const store = []
  response = response.data
  console.log(response)

  console.log(response.length)
  response.forEach((contribution) => {
    store.push({
      repository: contribution.repo.url,
      date: contribution.created_at,
      //commits: contribution.payload.commits,
    })
  })
  console.log(frequencyCounter)
  // console.log(store)
  // console.log(store.length)
}
//userEvents()

async function checkUser() {
  let url = "GET /users/thomasabishop"
  let c = await octokit.request(url)
  console.log(c.data.login)
}
//checkUser()

async function eventFrequencies() {
  let url = "GET /users/thomasabishop/events?per_page=100"
  let response = await octokit.request(url)
  response = response.data
  frequencyCounter.totalContributions = response.length
  for (const entry of response) {
    frequencyCounter[entry.type] = (frequencyCounter[entry.type] || 0) + 1
  }
  console.log(frequencyCounter)
}

eventFrequencies()
