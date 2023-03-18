import { getRandomNumber, playGame } from '../index.js';

export const getGameRules = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export const createQuestion = () => {
  const minRandom = 0;
  const maxRandom = 100;
  const newNum = getRandomNumber(minRandom, maxRandom);
  const correctAnswer = newNum % 2 === 0 ? 'yes' : 'no';

  return [newNum, correctAnswer];
};

export const playEven = () => {
	playGame('even');
};
