//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// When to use final/static in JS? for maxMinutes in this case

export class Clock {
  // Max minutes clock can hold is 1440
  maxMinutes = 1440;
  minutes = 0;

  constructor(hours, minutes) {
    if (hours !== 0) {
      this.plus(hours * 60)
    }
    if (minutes && minutes !== 0) {
      this.plus(minutes)
    }
  }

  plus(minutes) {
    this.minutes += minutes;
    this.simplifyMinutes();
    return this;
  }

  minus(minutes) {
    this.minutes -= minutes;
    this.simplifyMinutes();
    return this;
  }

  simplifyMinutes() {
    this.minutes = this.minutes - (parseInt(this.minutes/this.maxMinutes) * this.maxMinutes);
  }

  equals(clock) {
    return this.toString() == clock.toString();
  }

  toString() {
    if (this.minutes < 0) {
      this.minutes = this.maxMinutes + this.minutes;
    }

    const hours = parseInt(this.minutes/60);
    const minutes = this.minutes - (hours * 60);

    let hoursAsString = hours > 9 ? hours.toString() : `0${hours}`;
    let minutesAsString = minutes > 9 ? minutes.toString() : `0${minutes}`;
    return `${hoursAsString}:${minutesAsString}`;
  }
}
