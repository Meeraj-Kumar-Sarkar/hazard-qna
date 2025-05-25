import inquirer from "inquirer";
import { handleAnswer } from "./index.js";

export async function question1() {
    const userAnswers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'Which language influenced the C language?',
        choices: [
            'UNIX',
            'B',
            'Assembly',
            'COBOL'
        ],
    });

    return handleAnswer(userAnswers.question_1, 'B');
}

export async function question2() {
    const userAnswers = await inquirer.prompt({
        name: 'question_2',
        type: 'list',
        message: 'What does a "file.h" name suggest about the file in C programming?',
        choices: [
            'It is a header file',
            'It is a source code file',
            'It is a binary file',
            'None of these',
        ],
    });

    return handleAnswer(userAnswers.question_2, 'It is a header file');
}

export async function question3() {
    const userAnswers = await inquirer.prompt({
        name: 'question_3',
        type: 'list',
        message: 'In C, given a pointer to a struct with 4-byte alignment, what happens if you increment the pointer by 1 (e.g., ptr++)?',
        choices: [
            'The pointer advances by 1 byte',
            'The pointer advances by the size of the struct',
            'The pointer advances by 4 bytes',
            'The operation is undefined',
        ],
    });

    return handleAnswer(userAnswers.question_3, 'The pointer advances by the size of the struct');
}

export async function question4() {
    const userAnswers = await inquirer.prompt({
        name: 'question_4',
        type: 'list',
        message: 'When writing to a file in C using fwrite(), what is the most reliable way to detect if an error occurred during the write operation?',
        choices: [
            'Check if fwrite() returns 0',
            'Check the file pointer for NULL',
            'Use ferror() after fwrite()',
            'Check feof() after fwrite()',
        ],
    });

    return handleAnswer(userAnswers.question_4, 'Use ferror() after fwrite()');
}

export async function question5() {
    const userAnswers = await inquirer.prompt({
        name: 'question_5',
        type: 'list',
        message: 'In a multi-file C program, what is the effect of declaring a variable as `static int x = 10;` in one source file?',
        choices: [
            'The variable is shared across all source files',
            'The variable is only accessible within that source file',
            'The variable is automatically initialized to 0',
            'The variable cannot be modified',
        ],
    });

    return handleAnswer(userAnswers.question_5, 'The variable is only accessible within that source file');
}

export async function question6() {
    const userAnswers = await inquirer.prompt({
        name: 'question_6',
        type: 'list',
        message: 'In C, what is the primary purpose of the `volatile` keyword when applied to a variable?',
        choices: [
            'To prevent the variable from being modified',
            'To ensure the variable is stored in register memory',
            'To inform the compiler that the variable may change unexpectedly',
            'To make the variable thread-safe',
        ],
    });

    return handleAnswer(userAnswers.question_6, 'To inform the compiler that the variable may change unexpectedly');
}

export async function question7() {
    const userAnswers = await inquirer.prompt({
        name: 'question_7',
        type: 'list',
        message: 'In C, when registering a signal handler using `signal(SIGINT, handler)`, what is a potential issue with calling `printf()` inside the handler function?',
        choices: [
            'It is not thread-safe',
            'It may cause a segmentation fault',
            'It is not async-signal-safe',
            'It will deadlock the program',
        ],
    });

    return handleAnswer(userAnswers.question_7, 'It is not async-signal-safe');
}

export async function question8() {
    const userAnswers = await inquirer.prompt({
        name: 'question_8',
        type: 'list',
        message: 'When allocating memory for a struct in C with `malloc(sizeof(struct example))`, what must be considered to ensure proper memory alignment?',
        choices: [
            'The size of the struct must be a multiple of 4',
            'The allocated memory is automatically aligned by malloc',
            'The struct must be declared with `__attribute__((aligned))`',
            'The memory must be manually aligned using pointer arithmetic',
        ],
    });

    return handleAnswer(userAnswers.question_8, 'The allocated memory is automatically aligned by malloc');
}

export async function question9() {
    const userAnswers = await inquirer.prompt({
        name: 'question_9',
        type: 'list',
        message: 'In a C header file, what is the purpose of `#pragma once` compared to traditional include guards (`#ifndef`, `#define`, `#endif`)?',
        choices: [
            'It ensures the header is included only once during compilation',
            'It optimizes the compilation speed for large projects',
            'It allows multiple inclusions of the header file',
            'It defines a macro for conditional compilation',
        ],
    });

    return handleAnswer(userAnswers.question_9, 'It ensures the header is included only once during compilation');
}

export async function question10() {
    const userAnswers = await inquirer.prompt({
        name: 'question_10',
        type: 'list',
        message: 'In C, what is a potential issue with using bit fields in a struct (e.g., `unsigned int flag : 1;`) for memory efficiency?',
        choices: [
            'Bit fields are not supported in standard C',
            'The compiler may add padding, reducing memory savings',
            'Bit fields cannot be used with pointers',
            'Bit fields are always 32 bits wide',
        ],
    });

    return handleAnswer(userAnswers.question_10, 'The compiler may add padding, reducing memory savings');
}

export const Cquestions = [
    question1, question2, question3, question4, question5,
    question6, question7, question8, question9, question10,
]