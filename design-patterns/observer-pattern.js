class Subject {
  observers = [];

  getCurrentTime() {
    var d = new Date();
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

  addObserver(...observer) {
    for (const o of observer) {
      this.observers.push(o);
    }
  }
  removeObserver(observer) {
    const match = this.observers.findIndex((element) => element === observer);
    this.observers.splice(match, 1);
  }
  notify() {
    for (const o of this.observers) {
      o.update(`I was updated at ${this.getCurrentTime()}`);
    }
  }
}

class ObserverA {
  state = 'I am observer A';
  update(newState) {
    this.state = newState;
  }
}

class ObserverB {
  state = 'I am observer B';

  update(newState) {
    this.state = newState;
  }
}

let subjectInstance = new Subject();
let obsAInstance = new ObserverA();
let obsBInstance = new ObserverB();

subjectInstance.addObserver(obsAInstance, obsBInstance);

subjectInstance.notify();
console.log(obsBInstance.state);
