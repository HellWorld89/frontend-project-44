import runGame from '../index.js'
import { getRandomNumber } from '../utils/utils.js'

const gameDescription = 'Find the greatest common divisor of given numbers.'

const generateQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100)
  const num2 = getRandomNumber(1, 100)
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
