//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {
  if (n === 0) {
    return [];
  }
  let result = [[1]];
  for (let i = 1; i < n; i ++) {
    const prevRow = result[i-1];
    const newRow = [];
    for (let j = 0; j < prevRow.length + 1; j++) {
      const left = j - 1 < 0 ? 0 : prevRow[j-1];
      const right = j > prevRow.length - 1 ? 0 : prevRow[j];
      newRow.push(left + right);
    }
    result.push(newRow);
  }
  return result;
};
