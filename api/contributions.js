import { Octokit } from "octokit"
import { ghToken } from "./credentials.js"

const octokit = new Octokit({ auth: ghToken })

async function contributions() {
  let url = "GET /repos/thomasabishop/js-kata/contributors"
  let c = await octokit.request(url)
  console.log(c)
}

//contributions()

async function userEvents() {
  let url = "GET /users/thomasabishop/events?per_page=100"
  let response = await octokit.request(url)
  const store = []
  response = response.data
  response.forEach((contribution) => {
    store.push({
      repository: contribution.repo.url,
      date: contribution.created_at,
      //commits: contribution.payload.commits,
    })
  })
  console.log(store)
  console.log(store.length)
}
userEvents()
