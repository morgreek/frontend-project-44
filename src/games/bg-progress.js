import { getRandomNumber, playGame } from '../index.js';

export const getGameRules = () => {
  console.log('What number is missing in the progression?');
};

export const createQuestion = () => {
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

export const playProgression = () => {
  playGame('prgs');
};
