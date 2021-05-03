function generateLastThirtyDays() {
  // Store prev 30 days
  const month = [];
  // Get today's date as JS timestamp
  const today = new Date();
  const todayString = new Date(today).toDateString();
  // Loop backwards, subtracting each day from now and convert to string
  let dayCounter = 29;
  while (dayCounter > 0) {
    let prev = new Date().setDate(today.getDate() - dayCounter);
    prev = new Date(prev).toDateString();
    month.push(prev);
    dayCounter--;
  }

  month.push(todayString);
  console.log(month.length);
  return month;
}

//console.log(generateLastThirtyDays());

function isoFormatToDateOnly(isoString) {
  const rgx = /\d{4}-\d{2}-\d{2}/gi;
  return isoString.match(rgx);
}

function getAndFormatPastDate(startDate, daysSinceStartDate) {
  let pastDate = new Date().setDate(startDate.getDate() - daysSinceStartDate);
  pastDate = new Date(pastDate);
  const [dateOnly] = isoFormatToDateOnly(pastDate.toISOString());
  return dateOnly;
}

function hash() {
  const monthHashmap = new Map();
  const today = new Date();
  let day = 30;
  while (day > 0) {
    monthHashmap.set(getAndFormatPastDate(today, day), { commits: 0 });
    day--;
  }
  return monthHashmap;
}

let monthHash = hash();
console.log(monthHash);
monthHash.get('2021-04-11').commits++;
console.log(monthHash);
