import inquirer from "inquirer";
import { handleAnswer } from "./index.js";

// Question 1
export async function pyQuestion1() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q1',
        type: 'list',
        message: 'What is the output of `print(2 + 3 * 2)`?',
        choices: ['10', '8', '7', 'Error'],
    });
    return handleAnswer(userAnswers.py_q1, '8');
}

// Question 2
export async function pyQuestion2() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q2',
        type: 'list',
        message: 'Which data type is mutable in Python?',
        choices: ['tuple', 'string', 'list', 'int'],
    });
    return handleAnswer(userAnswers.py_q2, 'list');
}

// Question 3
export async function pyQuestion3() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q3',
        type: 'list',
        message: 'What does `print("Hello", end=" ")` do?',
        choices: [
            'Prints "Hello" with a space at the end',
            'Prints "Hello" and exits',
            'Throws an error',
            'Prints "end"'
        ],
    });
    return handleAnswer(userAnswers.py_q3, 'Prints "Hello" with a space at the end');
}

// Question 4
export async function pyQuestion4() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q4',
        type: 'list',
        message: 'How do you define a function in Python?',
        choices: [
            'function my_func():',
            'def my_func():',
            'define my_func():',
            'func my_func():'
        ],
    });
    return handleAnswer(userAnswers.py_q4, 'def my_func():');
}

// Question 5
export async function pyQuestion5() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q5',
        type: 'list',
        message: 'What is `"hello"[1:4]`?',
        choices: ['hel', 'ell', 'llo', 'lo'],
    });
    return handleAnswer(userAnswers.py_q5, 'ell');
}

// Question 6
export async function pyQuestion6() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q6',
        type: 'list',
        message: 'What does `print(True or False)` output?',
        choices: ['True', 'False', 'Error', 'None'],
    });
    return handleAnswer(userAnswers.py_q6, 'True');
}

// Question 7
export async function pyQuestion7() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q7',
        type: 'list',
        message: 'What happens with `5 + "5"` in Python?',
        choices: ['10', '"55"', 'TypeError', '55'],
    });
    return handleAnswer(userAnswers.py_q7, 'TypeError');
}

// Question 8
export async function pyQuestion8() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q8',
        type: 'list',
        message: 'What is the purpose of `__init__` in a class?',
        choices: [
            'To terminate the object',
            'To initialize object attributes',
            'To import modules',
            'To handle errors'
        ],
    });
    return handleAnswer(userAnswers.py_q8, 'To initialize object attributes');
}

// Question 9
export async function pyQuestion9() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q9',
        type: 'list',
        message: 'What is the output of `[1,2,3].append(4)`?',
        choices: ['[1,2,3,4]', '[4,1,2,3]', 'None', 'Error'],
    });
    return handleAnswer(userAnswers.py_q9, 'None');
}

// Question 10
export async function pyQuestion10() {
    const userAnswers = await inquirer.prompt({
        name: 'py_q10',
        type: 'list',
        message: 'What is the default scope of variables in Python functions?',
        choices: ['Global', 'Local', 'Static', 'Public'],
    });
    return handleAnswer(userAnswers.py_q10, 'Local');
}

export const pythonQuestions = [
    pyQuestion1, pyQuestion2, pyQuestion3, pyQuestion4, pyQuestion5,
    pyQuestion6, pyQuestion7, pyQuestion8, pyQuestion9, pyQuestion10
];
