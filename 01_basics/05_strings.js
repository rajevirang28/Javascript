const name = "Virang"
const repoCount = 50

// console.log(name + repoCount + "Value"); old syntax

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('Virang Raje')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

// Types of Strings

//anchor
console.log(gameName.anchor("Virang"));

//at
console.log(gameName.at(2));