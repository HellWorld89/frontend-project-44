import readlineSync from 'readline-sync'
import { ROUNDS_COUNT } from './utils/utils.js'
import greetUser from './cli.js'

const runGame = (gameDescription, generateQuestionAndAnswer) => {
  const userName = greetUser()

  console.log(gameDescription)

  const roundsCount = ROUNDS_COUNT

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (userAnswer === correctAnswer) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export default runGame
