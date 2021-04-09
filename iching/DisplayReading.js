import CastHexagram from './CastHexagram.js';
import chalk from 'chalk';
export default class DisplayReading {
  constructor() {
    this.reading = new CastHexagram();
    this.readingRaw = this.reading.hexagram();
  }

  lineChanging = {
    6: chalk.red.bold('-x-'),
    7: chalk.blue.bold('---'),
    8: chalk.blue.bold('- -'),
    9: chalk.green.bold('-o-'),
  };

  lineStandard = {
    6: chalk.blue.bold('- -'),
    7: chalk.blue.bold('---'),
    8: chalk.blue.bold('- -'),
    9: chalk.blue.bold('---'),
  };

  checkChangingLines() {
    return this.readingRaw.some((line) => line === 6 || line === 9);
  }

  get hexagramFull() {
    console.log('Changing reading:');
    for (const line of this.readingRaw) {
      console.log(this.lineChanging[line.toString()]);
    }
  }

  get hexagramPresent() {
    console.log('Standard reading:');
    this.checkChangingLines() &&
      console.log(chalk.yellow('Your reading contains a changing trigram'));
    for (const line of this.readingRaw) {
      console.log(this.lineStandard[line.toString()]);
    }
  }
}
