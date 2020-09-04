//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed')
  }
  if (n === 1) {
    return 0;
  }
  console.log(n)
  
  return 1 + (n % 2 === 0 ? steps(n / 2) : steps(n * 3 + 1))
};
