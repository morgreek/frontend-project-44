#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { playerName } from './brain-games.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const mainGame = () => {
  const count = 3;
  const minRandom = 0;
  const maxRandom = 100;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < count; i += 1) {
    const newNum = getRandomNumber(minRandom, maxRandom);
    const correctAnswer = newNum % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${newNum}`);
    const playerAnswer = readlineSync.question('Your answer:  ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return false;
    }
  }

  return true;
};

if (mainGame()) {
  console.log(`Congratulations, ${playerName}!`);
} else {
  console.log(`Let's try again, ${playerName}!`);
}
