import runGame from '../index.js';
import { getRandomNumber, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../utils/utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAndAnswer);
