import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const calc = (a, b, operator) => {
  let calcResult = '';
  switch (operator) {
    case '+':
      calcResult = a + b;
      break;
    case '-':
      calcResult = a - b;
      break;
    case '*':
      calcResult = a * b;
      break;
    default:
      throw Error('Unknow operator');
  }

  return calcResult;
};

const createQuestion = () => {
  const minRandom = 1;
  const maxRandom = 50;
  const operations = ['+', '-', '*'];

  const firstNum = getRandomNumber(minRandom, maxRandom);
  const secndNum = getRandomNumber(minRandom, maxRandom);
  const operatorIndex = getRandomNumber(0, operations.length - 1);

  const correctAnswer = calc(firstNum, secndNum, operations[operatorIndex]);

  return [`${firstNum} ${operations[operatorIndex]} ${secndNum}`, `${correctAnswer}`];
};

const playCalc = () => {
  playGame('What is the result of the expression?', createQuestion);
};

export default playCalc;
