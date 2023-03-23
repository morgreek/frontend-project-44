#!/usr/bin/env node

import asking from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const playerName = asking('May I have your name? ');
console.log(`Hello, ${playerName}!`);
