/*
 * setTimeout() => execute a function once, after a set period of time (ms)
 * setInterval() => repeatedly execute the function after a set period of time (ms), i.e run at intervals
 *
 * Both are methods on the Window object, not the document object, we don't need to use the `Windox.` prefix
 *
 * 1000ms = 1s
 */

/* The timeout methods have a callback structure as both are higher-order functions */

/* Timeout without arguments */
function timeoutExample() {
  const echo = () => console.log('this is the phrase');
  console.log('In three seconds your phrase will be written...');
  setTimeout(echo, 3000);
}
//timeoutExample();

/* Timeout with arguments */
function timeoutExampleArgs(phrase) {
  const echo = (x) => console.log(x);
  console.log('The time is near.');
  setTimeout(echo, 3000, phrase);
}
//timeoutExampleArgs('The time is now.');

/* Interval without arguments */
function intervalExample() {
  const echo = () => console.log('phrase at interval');
  setInterval(echo, 1000);
}
//intervalExample();

/* Interval with arguments */
function intervalExampleArgs(phrase) {
  const echo = (x) => console.log(x);
  setInterval(echo, 1000, phrase);
}
//intervalExampleArgs('Wait, worry, why bother?');

/* Print to the console once a second */
function countdown() {
  let start = Math.round(new Date().getTime() / 1000);

  const tick = () =>
    console.log(Math.round(new Date().getTime() / 1000) - start);

  setInterval(tick, 1000);
}

countdown();
