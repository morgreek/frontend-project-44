import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  const sqrtNum = Math.floor(Math.sqrt(num));
  let prime = num !== 1;

  const maxIter = sqrtNum + 1;
  for (let i = 2; i < maxIter; i += 1) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }

  return prime;
};

const createQuestion = () => {
  const minRand = 1;
  const maxRand = 271;

  const randNumb = getRandomNumber(minRand, maxRand);
  const correctAnswer = isPrime(randNumb) ? 'yes' : 'no';

  return [randNumb, correctAnswer];
};

const playPrime = () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', createQuestion);
};

export default playPrime;
