import {
  getWakatimeData,
  getAndFormatPastDate,
  isoFormatToDateOnly,
  createHashMap,
} from './wakatime.js';

async function getCommitsForRepo(repo) {
  try {
    let commits = await getWakatimeData(`/projects/${repo}/commits`);
    return commits;
  } catch (error) {
    console.log(error);
  }
}

async function getRepos() {
  const repositories = [];
  const projects = await getWakatimeData('projects');
  projects.data.map((project) => repositories.push(project.id));
  return repositories;
}

// Return commit dates for single project
async function getCommitData(repo) {
  const store = [];
  let c = await getCommitsForRepo(repo);
  if (c !== undefined) {
    c.commits.map((commit) =>
      store.push(isoFormatToDateOnly(commit.committer_date))
    );
  }
  return store;
}

async function getCommitsForMonth() {
  const monthlyCommits = createHashMap();
  const repoIds = await getRepos();
  const commitDates = [];

  for (const repo of repoIds) {
    let b = await getCommitData(repo);
    commitDates.push(...b);
  }

  commitDates.forEach((date) => {
    if (monthlyCommits.has(date)) {
      monthlyCommits.get(date).commitCount++;
    }
  });
  console.log(monthlyCommits);
}

getCommitsForMonth();
