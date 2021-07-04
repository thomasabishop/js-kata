const frequencyCounter = {
  totalContributions: 0,
}

export default frequencyCounter

const dummyData = [
  {
    type: "PushEvent",
    other: 0,
  },
  {
    type: "PullEvent",
    other: 0,
  },
  {
    type: "PushEvent",
    other: 0,
  },
  {
    type: "IssueEvent",
    other: 0,
  },
]

const frequencyCounterTwo = {}

function countFreqsSwitch(arr) {
  for (const entry of arr) {
    switch (entry.type) {
      case "PushEvent":
        frequencyCounter.commits++
        break
      case "PullEvent":
        frequencyCounter.pullRequests++
        break
      case "IssueEvent":
        frequencyCounter.issues++
    }
  }
  return frequencyCounter
}

function countFreqsRefined(arr) {
  for (const entry of arr) {
    frequencyCounterTwo[entry.type] = (frequencyCounterTwo[entry.type] || 0) + 1
  }
  return frequencyCounterTwo
}
