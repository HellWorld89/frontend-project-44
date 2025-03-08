import readLineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  let userName;
  do {
    userName = readLineSync.question('May I have your name?');
    if (userName === null || userName.trim() === '') {
      console.log(`The name cannot be empty. Please enter your name.`);
    }
  } while (userName === null || userName.trim() === '');

  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greetUser;
