//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const mapping = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export const toRna = (str) => {
  if (str.length == 0) {
    return '';
  }
  const dna = str.split('');
  const result = [];
  dna.forEach((nuc) => {
    result.push(mapping[nuc]);
  })
  return result.join('');
};
