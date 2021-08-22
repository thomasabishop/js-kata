const timeStamp = Date.now();

function timeSince() {
  let end, start;
  start = new Date();
  for (var i = 0; i < 1000; i++) {
    Math.sqrt(i);
  }
  end = new Date();
  return end.getTime() - start.getTime();
}

console.log(timeSince());
