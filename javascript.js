import inquirer from "inquirer";
import { handleAnswer } from "./index.js";


export async function question1() {
    const userAnswers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'JavaScript was created in 10 days then released on\n',
        choices: [
            'May 23rd, 1995',
            'Nov 24th, 1995',
            'Dec 4th, 1995',
            'Dec 17, 1996',
        ],
    });
    return handleAnswer(userAnswers.question_1, 'Dec 4th, 1995');
}

export async function question2() {
    const userAnswers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What is x? var x = 1_1 + "1" + Number(1)\n',
        choices: ['4', '"4"', '"1111"', '69420'],
    });

    return handleAnswer(userAnswers.question_2, '"1111"');
}

export async function question3() {
    const userAnswers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: `What is the first element in the array? ['🐏', '🦙', '🐍'].length = 0\n`,
        choices: ['0', '🐏', '🐍', 'undefined'],
    });
    return handleAnswer(userAnswers.question_3, 'undefined');
}

export async function question4() {
    const userAnswers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'Which of the following is NOT a primitive type?\n',
        choices: [
            'boolean',
            'number',
            'null',
            'object', // Correct
        ],
    });
    return handleAnswer(userAnswers.question_4, 'object');
    // return handleAnswer(answers.question_4 === 'object');
}

export async function question5() {
    const userAnswers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message:
            'JS is a high-level single-threaded, garbage-collected,\n' +
            'interpreted(or just-in-time compiled), prototype-based,\n' +
            'multi-paradigm, dynamic language with a ____ event loop\n',
        choices: ['multi-threaded', 'non-blocking', 'synchronous', 'promise-based'],
    });
    return handleAnswer(userAnswers.question_5, 'non-blocking');
    // return handleAnswer(answers.question_5 === 'non-blocking');
}

export async function question6() {
    const userAnswers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'Which keyword is used to create a constant in JavaScript?\n',
        choices: [
            'var',
            'let',
            'const', // Correct
            'static',
        ],
    });
    return handleAnswer(userAnswers.question_6, 'const');
    // return handleAnswer(answers.question_6 === 'const');
}

export async function question7() {
    const userAnswers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'Which of these array methods does NOT mutate the original array?\n',
        choices: [
            'push',
            'pop',
            'slice', // Correct
            'splice',
        ],
    });
    return handleAnswer(userAnswers.question_7, 'slice');
    // return handleAnswer(answers.question_7 === 'slice');
    // return handleAnswer(answers.question_7 === 'slice');
    // return handleAnswer(answers.question_7 === 'slice');
}

export async function question8() {
    const userAnswers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'What will `console.log(typeof NaN)` output?\n',
        choices: [
            '"number"', // Correct
            '"undefined"',
            '"NaN"',
            '"object"',
        ],
    });
    return handleAnswer(userAnswers.question_8, '"number"');
    // return handleAnswer(answers.question_8 === '"number"');
}

export async function question9() {
    const userAnswers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'JavaScript uses the __________ .\n',
        choices: [
            'CPython',
            'JVM',
            'V8 Engine',
            'ECMA Script',
        ],
    });
    return handleAnswer(userAnswers.question_9, 'V8 Engine');
    // return handleAnswer(answer.question_9 === 'V8 Engine');
}

export async function question10() {
    const userAnswers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'What is the full form of DOM?\n',
        choices: [
            'Document Object Manipulation ',
            'Desktop Operating Machine',
            'Dynamic Object Manipulation',
            'Document Object Model',
        ]
    });
    return handleAnswer(userAnswers.question_10, 'Document Object Model');
    // return handleAnswer(answer.question_10 === 'Document Object Model')
}

export const questions_js = [
    question1, question2, question3, question4, question5,
    question6, question7, question8, question9, question10
];