import runGame from '../index.js';
import { getRandomNumber, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../utils/utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const secondNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const calculateGcd = (a, b) => {
    let [currentA, currentB] = [a, b];
  
    while (currentB !== 0) {
      [currentA, currentB] = [currentB, currentA % currentB];
    }
  
    return currentA;
  };
  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(calculateGcd(firstNumber, secondNumber));

  return [question, correctAnswer];
}

export default () => runGame(gameDescription, generateQuestionAndAnswer);