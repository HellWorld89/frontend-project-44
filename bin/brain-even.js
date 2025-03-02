#!/usr/bin/env node

import readLineSync from 'readLine-sync';
import greetUser from '../src/cli.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const playEvenGame = () => {
    const userName = greetUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswersCount = 0;
    const requiredCorrectAnswers = 3;

    while (correctAnswersCount < requiredCorrectAnswers) {
        const randomNumber = getRandomNumber(1, 100);
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readLineSync.question('Your answer:').toLowerCase();

        const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount += 1;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.)`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
    }

    console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
