function logSomething() {
    return 'Hello';
}

let promise = new Promise((resolve, reject) => setTimeout(resolve(logSomething()),2000));

promise.then((val) => console.log(`Promise resolved with ${val}`));
