//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (str) => {
  let builder = str.split('');

  for (let i = 0; i < str.length/2; i++) {
    let tmp = builder[i];
    builder[i] = builder[str.length - 1 - i];
    builder[str.length - 1 - i] = tmp;
  }

  return builder.join('');
};
