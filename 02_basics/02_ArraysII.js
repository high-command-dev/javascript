const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman", "flash","batman"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const  arr = marvel_heros.concat(dc_heros)
// console.log(arr);
// This is spread operator '...'
// const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros);

// const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_arr = arr.flat(Infinity)

// console.log(real_arr);

console.log(Array.isArray("Ashutosh"));

console.log(Array.from("Ashutosh"));

console.log(Array.from({name: "Ashutosh"})); // Interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

asc = asc;