const name = "Virang"
const repoCount = "50"

// console.log(name + repoCount + "Value"); old syntax

console.log('Hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('   Virang Raje    ')

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

//concat
console.log(name.concat(' ',repoCount)); //The concat() method of String values concatenates the string arguments to this string and returns a new string.
console.log(repoCount.concat(' ',name));

//constructor
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
console.log(a instanceof String); // is true
console.log(b instanceof String); // is false
console.log(typeof a); // "object"
console.log(typeof b); // "string"
 //The String() constructor creates String objects. When called as a function, it returns primitive values of type String.

//endsWith
console.log(gameName.endsWith('Raje')); // The endsWith() method of String values determines whether a string ends with the characters of this string, returning true or false as appropriate.

//fixed 
console.log(gameName.fixed()); //no longer

//fontcolor
console.log(gameName.fontcolor()); //no longer

//fontsize
console.log(gameName.fontsize());

//includes
console.log(gameName.includes('Virang'));

//indexOf
console.log(gameName.indexOf('n'));

//replace
console.log(gameName.replace('Virang', 'Veera'));

//substring
console.log(gameName.substring(0 , 1));

//toUpperCase
console.log(gameName.toUpperCase());

//toLowerCase
console.log(gameName.toLowerCase());

//trim
console.log(gameName.trim());