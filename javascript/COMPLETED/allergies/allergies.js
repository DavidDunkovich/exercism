//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  allergyVals = [
    { key: 'cats', val: 128 },
    { key: 'pollen', val: 64 },
    { key: 'chocolate', val: 32 },
    { key: 'tomatoes', val: 16 },
    { key: 'strawberries', val: 8 },
    { key: 'shellfish', val: 4 },
    { key: 'peanuts', val: 2 },
    { key: 'eggs', val: 1 },
  ];

  trueScore;

  constructor(score) {
    this.trueScore = score;
    if (score > 255) {
      let mult = parseInt(score/256);
      this.trueScore = this.trueScore - (mult*256);
    }
  }

  list() {
    let tmp = this.trueScore;
    let allergyList = [];
    this.allergyVals.forEach((al) => {
      if (tmp >= al.val) {
        tmp = tmp - al.val;
        allergyList.push(al)
      }
    })
    return allergyList.sort((a, b) => a.val - b.val).map((al) => al.key);
  }

  allergicTo(allergy) {
    return this.list().some((al) => al == allergy);
  }
}
