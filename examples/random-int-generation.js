function generateWeekData(weeks) {
  const week = [];

  for (let i = 0; i < weeks; i++) {
    for (let j = 0; j < 7; j++) {
      week.push(Math.trunc(Math.random() * 10));
    }
  }
  return week.length;
}

console.log(generateWeekData(4));
