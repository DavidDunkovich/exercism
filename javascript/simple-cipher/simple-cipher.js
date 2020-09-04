//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  alphabet = ['a','b','c','d','e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  codedAlt = [];

  constructor(key) {
    let shift = 3;
    if (key.toMatch(/^[a-z]+$/)) {
      shift = this.alphabet.findIndex(key[0]);
    }
    this.alphabet.forEach((x, i) => {
      let index = i + shift >= 26 ? i + shift - 26 : i + shift;
      this.codedAlt.push(this.alphabet[index]);
    })
  }

  encode() {
    throw new Error("Remove this statement and implement this function");
  }

  decode() {
    throw new Error("Remove this statement and implement this function");
  }

  get key() {
    throw new Error("Remove this statement and implement this function");
  }
}
