#!/usr/bin/env node

import askName from '../src/cli.js';

// Main code
console.log('Welcome to the Brain Games!');

export const playerName = askName();
console.log(`Hello, ${playerName}!`);
