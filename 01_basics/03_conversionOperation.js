let score = "18abc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "18" => 18
// "18abc" => NaN (Not a Number) type is number
// true => 1; false => 0;
 
let  isLoggedIn = 1
let boolenIsLoggedIn = Boolean(isLoggedIn)
console.log(boolenIsLoggedIn)

// 1 => true; 0 => false;
// "" => false
// "Virang" => true

let someNumber = 18

let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

// 18 => 18 but type is string

// Operations

let value = 3
let negvalue = -value
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/2)
console.log(2%2)

let str1 = "Hello"
let str2 = " Virang"
let str3 = str1 + str2
console.log(str3)

// not write way to write this below equation.
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true)
console.log(+"")

let a = 3
++a;
 console.log(a)

 let b = 3
b++;
 console.log(a)