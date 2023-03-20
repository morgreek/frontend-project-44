import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const createQuestion = () => {
  const minLen = 5;
  const maxLen = 10;
  const progLen = getRandomNumber(minLen, maxLen);
  const startNum = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 15);
  const idHide = getRandomNumber(0, progLen - 1);

  const sequence = [];
  let correctAnswer = '';
  for (let i = 0; i < progLen; i += 1) {
    const a = startNum + i * step;
    if (i === idHide) {
      correctAnswer += a;
      sequence.push('..');
    } else {
      sequence.push(a);
    }
  }

  return [sequence.join(' '), correctAnswer];
};

const playProgression = () => {
  playGame('What number is missing in the progression?', createQuestion);
};

export default playProgression;
