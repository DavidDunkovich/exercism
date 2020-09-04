//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  const alphabet = ['a','b','c','d','e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const occurrences = {};
  str.split('').forEach((x) => {
    const letter = x.toLowerCase();
    occurrences[letter] = occurrences[letter] + 1 || 1;
  })
  return alphabet.every((letter) => occurrences[letter] > 0);
};
