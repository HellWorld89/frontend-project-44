import runGame from '../index.js';
import { getRandomNumber, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../utils/utils.js';

const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const num2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return [question, correctAnswer];
};

export default () => runGame(gameDescription, generateQuestionAndAnswer);
