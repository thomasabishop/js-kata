import fetch from 'node-fetch';
import btoa from 'btoa';
import { waka } from './credentials.js';
export async function getWakatimeData(endpoint) {
  const rootEndpoint = `https://wakatime.com/api/v1/users/current/${endpoint}`;
  try {
    let response = await fetch(rootEndpoint, {
      headers: {
        authorization: `Basic ${btoa(waka)}`,
      },
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error. Status = ${response.status}`);
    } else {
      let data = await response.json();
      return data;
    }
  } catch (error) {
    console.error(error);
  }
}

// Get hours:mins coding time for last 30 days

function convertToDecimalTime(hours, minutes) {
  let decimalMins = minutes / 60;
  let strForm = (hours + decimalMins).toFixed(2);
  return Number(strForm);
}

function hoursCoding() {
  getWakatimeData('summaries?range=last_30_days').then(function (info) {
    let allInfo = info.data;
    console.log(allInfo.is_up_to_date);
    let decimalHours = allInfo
      .map((x) => [x.grand_total.hours, x.grand_total.minutes])
      .map((x) => convertToDecimalTime(...x));
    console.log(decimalHours);
  });
}

//hoursCoding();

// Get language : percent : time
function languagePercents() {
  getWakatimeData('stats/last_30_days').then(function (info) {
    let allInfo = info.data;
    let langs = allInfo.languages.map((x) => [x.name, x.percent]);
    // Remove Sketch data
    for (let i = 0; i < langs.length; i++) {
      if (langs[i][0] === 'Sketch Drawing') {
        langs.splice(i, 1);
      }
    }

    console.log(langs);
  });
}
//hoursCoding();
languagePercents();

export function isoFormatToDateOnly(isoString) {
  const rgx = /\d{4}-\d{2}-\d{2}/gi;
  let [destructed] = isoString.match(rgx);
  return destructed;
}

function getAndFormatPastDate(startDate, daysSinceStartDate) {
  let pastDate = new Date().setDate(startDate.getDate() - daysSinceStartDate);
  pastDate = new Date(pastDate);
  return isoFormatToDateOnly(pastDate.toISOString());
}

export function createHashMap() {
  const monthHashmap = new Map();
  const today = new Date();
  let day = 30;
  while (day > 0) {
    monthHashmap.set(getAndFormatPastDate(today, day), { commitCount: 0 });
    day--;
  }
  return monthHashmap;
}

//console.log(createHashMap().size);
