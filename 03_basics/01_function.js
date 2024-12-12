function sayMyName(){
    console.log("V");
    console.log("i");
    console.log("r");
    console.log("a");
    console.log("n");
    console.log("g");
}
// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumber(3, 4)

// console.log("Result: ", result);

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
 