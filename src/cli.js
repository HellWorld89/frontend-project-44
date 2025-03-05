import readLineSync from 'readLine-sync'

const greetUser = () => {
  const userName = readLineSync.question('May I have your name?')
  console.log(`Hello, ${userName}!`)
  return userName
}

export default greetUser
