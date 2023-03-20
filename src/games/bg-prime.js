import { playGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const createQuestion = () => {
  const minRand = 1;
  const maxRand = 271;
  const primeTable = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
    61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
    131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191,
    193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257,
    263, 269, 271
  ];

  const randNumb = getRandomNumber(minRand, maxRand);
  const correctAnswer = primeTable.includes(randNumb) ? 'yes' : 'no';

  return [randNumb, correctAnswer];
};

export const playPrime = () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', createQuestion);
};
