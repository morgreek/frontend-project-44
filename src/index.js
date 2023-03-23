import asking from './cli.js';

const playGame = (description, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const playerName = asking('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  console.log(description);
  let gameResult = true;
  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRoundData();
    console.log(`Question: ${question}`);
    const playerAnswer = asking('Your answer:  ');
    if (playerAnswer !== correctAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      gameResult = false;
      break;
    }
    console.log('Correct!');
  }

  if (gameResult) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }

  return gameResult;
};

export default playGame;
