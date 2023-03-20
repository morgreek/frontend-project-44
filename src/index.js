import asking from './cli.js';

const askPlayerName = () => {
  const playerName = asking('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
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

const askThreeTimes = (generateRoundData) => {
  const count = 3;
  for (let i = 0; i < count; i += 1) {
    const [quest, answr] = generateRoundData();
    const isCorrect = askQuestion(quest, answr);
    if (!isCorrect) return false;
  }

  return true;
};

const playGame = (description, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = askPlayerName();

  if (generateRoundData === undefined) return null;

  console.log(description);
  const gameResult = askThreeTimes(generateRoundData);

  if (gameResult) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }

  return gameResult;
};

export default playGame;
