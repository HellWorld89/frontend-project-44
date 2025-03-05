import runGame from '../index.js'
import { getRandomNumber, MAX_NUMBER_ELEMENTS, MAX_RANDOM_NUMBER, MAX_STEP, MIN_NUMBER_ELEMENTS, MIN_RANDOM_NUMBER, MIN_STEP } from '../utils/utils.js'

const gameDescription = 'What number is missing in the progression?'

const generateQuestionAndAnswer = () => {
  const progressionLength = getRandomNumber(MIN_NUMBER_ELEMENTS, MAX_NUMBER_ELEMENTS)
  const progressionStep = getRandomNumber(MIN_STEP, MAX_STEP)
  const firstElement = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1)
  const progression = []

  let num1 = firstElement
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(num1)
    num1 += progressionStep
  }
  const hiddenValue = progression[hiddenIndex]
  progression[hiddenIndex] = '..'
  const question = progression.join(' ')
  const correctAnswer = String(hiddenValue)
  return [question, correctAnswer]
}

export default () => runGame(gameDescription, generateQuestionAndAnswer)
