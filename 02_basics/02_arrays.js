const marvel_heros = ["thor", "ironman", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const real_another_arry = another_arry.flat(Infinity)
console.log(real_another_arry);


console.log(Array.isArray("Virang"));
console.log(Array.from("Virang"));
console.log(Array.from({name: "Virang"}));  //interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));