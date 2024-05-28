import inquirer from "inquirer";
// 1) computer will generate a random number... (done)
// 2) user imput for guessing number.... (done)
// 3) compare using input with computer generated number and show result.... (done)
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1 to 10:"
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number.");
}
;
