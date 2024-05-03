#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 46.5,
    EURO: 3,
    YEN: 66,
};
let user_answer = await inquirer.prompt([
    { name: "from",
        message: "enter from currency",
        type: "list",
        choices: ['USD', 'PKR', 'EURO', 'YEN'] },
    { name: 'to',
        message: "enter to currency",
        type: "list",
        choices: ['USD', 'PKR', 'EURO', 'YEN'] },
    {
        name: 'amount',
        message: 'enter your amount',
        type: 'number'
    }
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let base_currency = amount / fromamount;
let converted_amount = base_currency * toamount;
console.log(converted_amount);
