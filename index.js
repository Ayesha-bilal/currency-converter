#! /usr/bin/env node
import inquirer from "inquirer";
let exchange_rate = {
    USD: 1, //Base currency(united state dollar)(united states)
    PKR: 277.96, //Pakistani rupees(pakistan)
    CNY: 7.25, //Chinese yuan (china)
    EUR: 0.92, // Euro (Europe)
    CAD: 1.36, //Canadian dollar(canada)
    JPY: 157.84, //Japanese yen (japan)
    AED: 3.67, //United arab emirates dirham (dubai)
};
let user_input = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Choose the currency to convert from: ",
        choices: ["USD", "PKR", "CNY", "EUR", "CAD", "JPY", "AED"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "Choose the currency to convert into:",
        choices: ["USD", "PKR", "CNY", "EUR", "CAD", "JPY", "AED"],
    },
    {
        name: "amount_to_be_converted",
        type: "input",
        message: "Enter the amount you want to convert:",
    },
]);
let from_amount = exchange_rate[user_input.from_currency];
let to_amount = exchange_rate[user_input.to_currency];
let Amount = user_input.amount_to_be_converted;
//formula
let base_amount = Amount / from_amount;
let converted_amount = base_amount * to_amount;
//display converted amount
console.log(`Converted amount = ${converted_amount}`);
