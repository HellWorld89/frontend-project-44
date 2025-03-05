import runGame from '../index.js'
import { getRandomNumber, MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from '../utils/utils.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const num2 = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const getCorrectGcd = (a, b) => {
    while (b !== 0) {
      let temp = b
      b = a % b
      a = temp
    }
    return a
  }
  const question = `${num1} ${num2}`
  const correctAnswer = String(getCorrectGcd(num1, num2))

  return [question, correctAnswer]
}

export default () => runGame(gameDescription, generateQuestionAndAnswer)
