import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const arithProgression = (init, step, len) => {
  const sequence = [];

  for (let i = 0; i < len; i += 1) {
    const a = init + i * step;
    sequence.push(a);
  }

  return sequence;
};

const createQuestion = () => {
  const minLen = 5;
  const maxLen = 10;
  const startNum = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 15);
  const progLen = getRandomNumber(minLen, maxLen);
  const idHide = getRandomNumber(0, progLen - 1);

  const sequence = arithProgression(startNum, step, progLen);

  const correctAnswer = sequence[idHide];
  sequence[idHide] = '..';

  return [sequence.join(' '), `${correctAnswer}`];
};

const playProgression = () => {
  playGame('What number is missing in the progression?', createQuestion);
};

export default playProgression;
