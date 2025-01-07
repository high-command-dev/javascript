// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]); // []
// const myHero = ["Ashutosh", "SpiderMan"]
const myArr = new Array(1,2,3,4);
// console.log(myArr[2]);
// console.log(myHero[0]);
// console.log(arr[1]);

// Array methods
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop();

// myArr.unshift(9)
// myArr.unshift(6) //Added to the first.
// myArr.shift(); //removed the shifted operation.
// myArr.shift();
// console.log(myArr.includes(9));
// const newArr = myArr.join();//join->convert it to string
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ",myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

console.log("A ",myArr);
const myn2 = myArr.splice(1, 3)

console.log(myn2);
console.log("B ",myArr);

