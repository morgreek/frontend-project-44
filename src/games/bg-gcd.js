import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const createQuestion = () => {
  const minRandom = 0;
  const maxRandom = 50;

  const a = getRandomNumber(minRandom, maxRandom);
  const b = getRandomNumber(minRandom, maxRandom);

  const gcbArr = [a, b].sort().reverse();

  let correctAnswer = '';
  let protect = 0;
  while (protect < 1000000) {
    const [x, r] = gcbArr;
    if (r === 0) {
      correctAnswer += x;
      break;
    }
    const temp = x % r;
    gcbArr[0] = r;
    gcbArr[1] = temp;
    protect += 1;
  }

  return [`${a} ${b}`, `${correctAnswer}`];
};

const playGcd = () => {
  playGame('Find the greatest common divisor of given numbers.', createQuestion);
};

export default playGcd;
