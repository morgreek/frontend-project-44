import { getRandomNumber, playGame } from '../index.js';

export const getGameRules = () => {
  console.log('What is the result of the expression?');
};

export const createQuestion = () => {
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
  		correctAnswer = 'Unknow operation '
  		break;
  }

  return [`${firstNum} ${operations[idxOper]} ${secndNum}`, `${correctAnswer}`];
};

export const playCalc = () => {
  playGame('calc');
};
