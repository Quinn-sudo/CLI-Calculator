#! /usr/bin/env node

import inquirer from "inquirer";
console.log("\n \t Welcome to Komal's simple CLI Calculator, It'd perform basic calculations\n");

const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'numb1',
        message: 'Enter the first number: ',
        validate: (input: string) => !isNaN(parseFloat(input)),
    },
    {
        type: 'number',
        name: 'numb2',
        message: 'Enter the second number: ',
        validate: (input: string) => !isNaN(parseFloat(input)),
    },
    {
        type: 'list',
        name: 'operator',
        message: 'Select the math operation you want to perform:',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }
]);

let result: number;

switch(answer.operator){
    case 'Add':
        result = answer.numb1 + answer.numb2;
        console.log("The answer for addition is: " + result);
        break;
    
    case 'Subtract':
        result = answer.numb1 - answer.numb2;
        console.log("The answer for subtraction is: " + result);
        break;

    case 'Multiply':
        result = answer.numb1 * answer.numb2;
        console.log("The answer for multiplication is: " + result);
        break;

    case 'Divide':
        result = answer.numb1 / answer.numb2;
        console.log(" The answer for division is: " + result);
        break;
}

