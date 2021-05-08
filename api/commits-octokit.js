import { Octokit } from 'octokit';
import { ghToken } from './cred.js';
import { createHashMap, isoFormatToDateOnly } from './wakatime.js';
const octokit = new Octokit({ auth: ghToken });

async function commitsForRepo2(repoName, startDate) {
  const store = [];
  let repo = await octokit.request(
    `GET /repos/thomasabishop/${repoName}/commits?since=${startDate}`
  );
  for (let c of repo.data) {
    store.push(isoFormatToDateOnly(c.commit.author.date));
  }
  return store;
}

async function getAllRepos() {
  let repos = await octokit.request('GET /user/repos?per_page=100');
  const repoNames = [];
  for (let repo of repos.data) {
    if (repo.owner.login === 'thomasabishop') {
      repoNames.push(repo.name);
    }
  }
  return repoNames;
}

async function getCommitsForMonth() {
  const monthCommits = createHashMap();
  const firstDate = monthCommits.keys().next().value;
  let repoList = await getAllRepos();
  for (let repo of repoList) {
    const commits = await commitsForRepo2(repo, firstDate);
    for (let commit of commits) {
      if (monthCommits.has(commit)) {
        monthCommits.get(commit).commitCount++;
      }
    }
  }
  console.log(monthCommits);
}

getCommitsForMonth();
