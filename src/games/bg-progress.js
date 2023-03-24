import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const getProgression = (firstElement, step, length) => {
  const sequence = [];

  for (let i = 0; i < length; i += 1) {
    const a = firstElement + i * step;
    sequence.push(a);
  }

  return sequence;
};

const createQuestion = () => {
  const minLen = 5;
  const maxLen = 10;
  const startNum = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 15);
  const progressionLength = getRandomNumber(minLen, maxLen);
  const index = getRandomNumber(0, progressionLength - 1);

  const sequence = getProgression(startNum, step, progressionLength);

  const correctAnswer = sequence[index];
  sequence[index] = '..';

  return [sequence.join(' '), `${correctAnswer}`];
};

const playProgression = () => {
  playGame('What number is missing in the progression?', createQuestion);
};

export default playProgression;
