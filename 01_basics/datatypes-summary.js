//primitive

// 7 type : string, Number, Boolean, null, undefined, symbol

// Reference (Non primitive) : Array, Objects, Functions

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')
console.log(id === anotherId)

const heroes = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// ********************

// Stack (Primitive), Heap (Non-Primitive)

let mynameis = "Virang Raje"
let othername = mynameis
othername = "Veera"

console.log(mynameis);
console.log(othername);

let userOne = {
     email: "user@google.com",
     upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "vkraje@google.com"

console.log(userOne.email);
console.log(userTwo.email);