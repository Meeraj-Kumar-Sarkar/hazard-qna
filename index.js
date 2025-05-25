#!/usr/bin/env node


// Created by 
/*
             /$$   /$$  /$$$$$$  /$$$$$$$$  /$$$$$$  /$$$$$$$  /$$$$$$$        /$$   /$$  /$$$$$$       
            | $$  | $$ /$$__  $$|_____ $$  /$$__  $$| $$__  $$| $$__  $$      | $$  | $$ /$$__  $$      
            | $$  | $$| $$  \ $$     /$$/ | $$  \ $$| $$  \ $$| $$  \ $$      | $$  | $$| $$  \ $$      
            | $$$$$$$$| $$$$$$$$    /$$/  | $$$$$$$$| $$$$$$$/| $$  | $$      | $$$$$$$$| $$  | $$      
            | $$__  $$| $$__  $$   /$$/   | $$__  $$| $$__  $$| $$  | $$      | $$__  $$| $$  | $$      
            | $$  | $$| $$  | $$  /$$/    | $$  | $$| $$  \ $$| $$  | $$      | $$  | $$| $$/$$ $$      
            | $$  | $$| $$  | $$ /$$$$$$$$| $$  | $$| $$  | $$| $$$$$$$/      | $$  | $$|  $$$$$$/      
            |__/  |__/|__/  |__/|________/|__/  |__/|__/  |__/|_______//$$$$$$|__/  |__/ \____ $$$      
                                                                       |______/                \__/      

// */

// Style Name : Big Monkey-ne


import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
import clear from 'console-clear';
import { questions_js } from './javascript.js';
import { pythonQuestions } from './python.js';
import { Cquestions } from './C.js';

let playerName;

export let score = 0;
// let totalQuestions = 0;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(
        'Welcome to ProLang Slayer\n'
    );

    await sleep();
    rainbowTitle.stop();

    console.log(`
  ${chalk.bgMagenta.bold('🔥 Code Quiz Challenge 🔥')}
  Welcome! I'm a vibrant process ready to test your ${chalk.green('JavaScript')} or ${chalk.blue('Python')} prowess. 💻
  Choose your language and answer the question with precision — one error, and it's ${chalk.bgRed.whiteBright('GAME OVER')}! 😎
  Unleash your ${chalk.green('inner code ninja')}, let your ${chalk.hex('#FF69B4')('dev spirit')} shine!
  Ready for the ${chalk.bold('epic start')}? Let’s dive in! 🚀
`);

}

export async function handleAnswer(userAnswers, answer) {
    const spinner = createSpinner('Checking answer...').start();
    await sleep();
    if (userAnswers === answer) {
        score++;
        spinner.success({ text: `Wo-ooh!! Nice work ${playerName}. That's a legit answer` });
    } else {
        spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!\n Actual answer : ${answer}\n Your Score :${score}` });
        process.exit(1);
    }
}

async function languageChoice() {
    const answer = await inquirer.prompt({
        name: 'lang',
        type: 'list',
        message: 'Choice the language you want to slay >>>',
        default() {
            return 'C'
        },
        choices: [
            'C',
            'JavaScript',
            'Python',
        ],
    });

    return answer.lang
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is your name?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;
}

function winner() {
    clear();
    figlet(`Congrats , ${playerName} !`, (err, data) => {
        console.log(gradient.pastel.multiline(data) + '\n');

        console.log(`
            ${chalk.bold('Score: ')} ${score}
            ${chalk.bgHex('#FC6C85').bold('🎉 Congratulations！ 🎉')} 
            You did it really nice！💖 
            ${chalk.whiteBright('Well Done！')} Bravo！😎 
            Btw！How much did you contribute in GitHub today? ✨

            ${chalk.greenBright('----Crafted by 4lex.Riley.90s\n')} 
                    `);
        process.exit(0);
    });
}

// Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



async function runRandomizedQuestions(question_array) {
    const shuffledQuestions = shuffle([...question_array]);
    for (const question of shuffledQuestions) {
        await question();
    }
}

// Run it with top-level await
// console.clear();
clear(); // This is the replacement of console.clear() [[Works better but need it's own package npm install console-clear ,, import clear from 'console-clear']]

switch (await languageChoice()) {
    case 'JavaScript':
        await welcome();
        await askName();
        await runRandomizedQuestions(questions_js);
        winner();
    case 'Python':
        await welcome();
        await askName();
        await runRandomizedQuestions(pythonQuestions);
        winner();
    case 'C':
        await welcome();
        await askName();
        await runRandomizedQuestions(Cquestions);
        winner();


}

