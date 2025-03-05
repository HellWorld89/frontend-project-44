import runGame from '../index.js'
import { getRandomNumber } from '../utils/utils.js'

const gameDescription = 'What number is missing in the progression?'

const generateQuestionAndAnswer = () => {
  const numberOfElements = getRandomNumber(5, 10)
  const step = getRandomNumber(2, 10)
  const startNumber = getRandomNumber(1, 100)
  const getRandomHideNumber = getRandomNumber(0, numberOfElements)
  const sequence = [startNumber]

  let num1 = startNumber
  for (let i = 0; i < numberOfElements - 1; i += 1) {
    const elem = num1 + step
    num1 = elem
    sequence.push(elem)
  }
  const hideIndex = sequence[getRandomHideNumber]
  sequence[getRandomHideNumber] = '..'
  const question = sequence.join(' ')
  const correctAnswer = String(hideIndex)
  return [question, correctAnswer]
}

export default () => runGame(gameDescription, generateQuestionAndAnswer)
