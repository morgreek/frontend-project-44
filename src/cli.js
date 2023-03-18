import readlineSync from 'readline-sync';

export default (askText) => readlineSync.question(askText);
