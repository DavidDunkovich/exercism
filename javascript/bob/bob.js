//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isYelling = message => {
  const chars = message.match(/^[A-Z]*$/i);
  if (chars) {
    return chars.length > 0;
  }
  return false;
};

const isQuestion = message => {
  return message[message.length - 1] === '?';
};

const isEmpty = message => {
  return message.match(/[a-zA-Z]*/g) === null
}

export const hey = (message) => {
  if (isQuestion(message) && isYelling(message)) {
    return "Calm down, I know what I'm doing!";
  }
  if (isQuestion(message)) {
    return 'Sure.';
  }
  if (isYelling(message)) {
    return 'Whoa, chill out!';
  }
  if (isEmpty(message)) {
    return 'Fine. Be that way!';
  }
  return 'Whatever.'
};
