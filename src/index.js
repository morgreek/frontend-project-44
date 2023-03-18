import asking from './cli.js';
import { getGameRules as getEvenRules, createQuestion as questEven } from './games/bg-even.js';
import { getGameRules as getCalcRules, createQuestion as questCalc } from './games/bg-calc.js';

export const prepareGame = () => {
  console.log('Welcome to the Brain Games!');
};

export const getPlayerName = () => {
  const playerName = asking('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const showGameRules = (nameGame) => {
  switch (nameGame) {
    case 'even':
      getEvenRules();
      break;
    case 'calc':
      getCalcRules();
    default:
      return false;
  }

  return true;
};

export const getQuestionByGame = (nameGame) => {
  switch (nameGame) {
    case 'even':
      return questEven();
    case 'calc':
      return questCalc();
    default:
      return false;
  }
};

const askQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`);
  const playerAnswer = asking('Your answer:  ');
  if (playerAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const askThreeTimes = (nameGame) => {
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const quest = getQuestionByGame(nameGame);
    const answr = askQuestion(quest[0], quest[1]);
    if (!answr) return false;
  }

  return true;
};

export const playGame = (nameGame) => {
  prepareGame();

  const playerName = getPlayerName();

  showGameRules(nameGame);

  const gameResult = askThreeTimes(nameGame);

  if (gameResult) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
