class Chronometer {
  constructor() {
   this.currentTime = 0;
   this.intervalId = null;
   this.clearInterval;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback){
        printTimeCallback();
      }
    }, 1000);
  }

  getMinutes() {
    let minutes = this.currentTime / 60;
    return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    value=value.toString();
    if (value.length === 1){
      return "0" + value;
    } else {
      return value;
    }
  }

  stop() {
  this.clearInterval = this.intervalId; 
  clearInterval();
   
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
  }
}
