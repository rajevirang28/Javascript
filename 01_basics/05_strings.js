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
console.log(gameName.anchor("Virang")); //no longer

//at
console.log(gameName.at(2));  // charAt(index)

//big
console.log(gameName.big());  //no longer  //you can manipulate font-size through the element.style.

//blink
console.log(gameName.blink());  //no longer

//bold
console.log(gameName.bold());  //no longer

//chatAt
console.log(gameName.charAt(3)); // charAt(index)

//charCodeAt
console.log(gameName.charCodeAt(2)); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
