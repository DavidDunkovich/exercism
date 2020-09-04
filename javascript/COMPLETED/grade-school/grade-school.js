//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  computedRoster = {};

  roster() {
    const tmp = {};
    for (const key in this.computedRoster) {
      tmp[key] = this.grade(key);
    }
    return tmp;
  }

  add(name, grade) {
    this.computedRoster[grade] ? this.computedRoster[grade].push(name) : this.computedRoster[grade] = [name];
  }

  grade(grade) {
    return this.computedRoster[grade] ? [...this.computedRoster[grade]].sort((a, b) => a[0].charCodeAt() - b[0].charCodeAt()) : [];
  }
}
