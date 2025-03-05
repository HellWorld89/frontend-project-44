import runGame from '../index.js'
import { getRandomNumber, MAX_NUMBER_ELEMENTS, MAX_RANDOM_NUMBER, MAX_STEP, MIN_NUMBER_ELEMENTS, MIN_RANDOM_NUMBER, MIN_STEP } from '../utils/utils.js'

const gameDescription = 'What number is missing in the progression?'

const generateQuestionAndAnswer = () => {
  const numberOfElements = getRandomNumber(MIN_NUMBER_ELEMENTS, MAX_NUMBER_ELEMENTS)
  const step = getRandomNumber(MIN_STEP, MAX_STEP)
  const startNumber = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
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
