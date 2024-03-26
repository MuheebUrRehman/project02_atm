#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 9696;
let welcomeMsg = await inquirer.prompt([
    {
        name: "welcome",
        type: "text",
        message: "Welcome to ATM (press ENTER to continue)",
    },
]);
let pinAnwser = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAnwser.pin === myPin) {
    console.log("correct pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select operation",
            type: "list",
            choices: ["Check balance", "Withdraw", "FastCash"],
        },
    ]);
    if (operationAns.operation === "Check balance") {
        console.log(`your current balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter your amount",
            type: "number",
        });
        if (amountAns.amount <= myBalance) {
            console.log(`${amountAns.amount} withdraw successfull!`);
            myBalance -= amountAns.amount;
            console.log(`your remaining balance ${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "FastCash") {
        let fastAns = await inquirer.prompt({
            name: "fastamount",
            message: "select your amount",
            type: "list",
            choices: ["1000", "5000", "8000", "10000"],
        });
        console.log(`${fastAns.fastamount} withdraw successfull `);
        myBalance -= fastAns.fastamount;
        console.log(`your remaining balance is ${myBalance}`);
    }
}
else {
    console.log("incorrect pin");
}
