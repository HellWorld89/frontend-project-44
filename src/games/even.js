import runGame from '../index.js'
import { getRandomNumber } from '../utils/utils.js'

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateQuestionAndAnswer = () => {
  const number = getRandomNumber(1, 100)
  const correctAnswer = isEven(number) ? 'yes' : 'no'
  return [number, correctAnswer]
}

export default () => runGame(gameDescription, generateQuestionAndAnswer)
