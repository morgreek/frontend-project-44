import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const createQuestion = () => {
  const minRandom = 0;
  const maxRandom = 100;
  const newNum = getRandomNumber(minRandom, maxRandom);
  const correctAnswer = newNum % 2 === 0 ? 'yes' : 'no';

  return [newNum, correctAnswer];
};

const playEven = () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', createQuestion);
};

export default playEven;
