import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const createQuestion = () => {
  const minRandom = 1;
  const maxRandom = 50;
  const operations = ['+', '-', '*'];

  const firstNum = getRandomNumber(minRandom, maxRandom);
  const secndNum = getRandomNumber(minRandom, maxRandom);
  const idxOper = getRandomNumber(0, operations.length - 1);

  let correctAnswer = '';
  switch (operations[idxOper]) {
    case '+':
      correctAnswer = firstNum + secndNum;
      break;
    case '-':
      correctAnswer = firstNum - secndNum;
      break;
    case '*':
      correctAnswer = firstNum * secndNum;
      break;
    default:
      correctAnswer = 'Unknow operation ';
      break;
  }

  return [`${firstNum} ${operations[idxOper]} ${secndNum}`, `${correctAnswer}`];
};

const playCalc = () => {
  playGame('What is the result of the expression?', createQuestion);
};

export default playCalc;
