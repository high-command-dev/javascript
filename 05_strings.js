const name = "Ashutosh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Ashutosh') 

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t')); 

// const newString = gameName.substring(0, 4)

// console.log(newString)


// const anotherString = gameName.slice(-8, 4)

// console.log(anotherString);


// // const newStringOne = "          Ashutosh   "
// // console.log(newStringOne)
// // console.log(newStringOne.trim());

// const url = "https://ashutosh.com//ashutosh%20negi"

// console.log(url.replace('%20','-'));

// console.log(url.includes('https'));

// console.log(gameName.split('-')); 

let str = "Ashutosh is a God Level Programmer  is real pro in all senses āśḥūṭōśḥ"
console.log(str);
console.log(`This is the length of the string :${str.length}`); // it is a property in javascript.

"JavaScript Strings Methods"

console.log(str.toLowerCase()); // convert to lower case letter.
// console.log(str.toUpperCase()); // convert to upper case letter.
console.log(str.includes("tosh")); // If this sub-string will be present or not.
console.log(str.startsWith('A')); //it will return boolean value if char will be start with.
console.log(str.endsWith('h')); // it will return boolean value if char will be end with.
console.log(str.search("God")); // It will return the index of the string.
console.log(str.match(/is/g)); // it return an array of that element that we have to match it is written in two slashes '//' and g represents globally and all return array of all the elements.
console.log(str.indexOf("is")); // search from the starting.
console.log(str.lastIndexOf("is")); // search from the last.
console.log(str.replace("āśḥūṭōśḥ","     Ashutosh            ")); // replace the string.
console.log(str.replace(/is/g,"are,")); // replace the string globally. 
console.log(str.trim()) // remove the whitespaces
console.log(str.charAt(62))
console.log(str.charCodeAt(62));
console.log(String.fromCharCode(65));
let str2 = "Bitch";
console.log(str.concat(str2));
console.log(str.split(" "));
console.log(str.repeat(2));
console.log(str.slice(-1));
console.log(str.substr(2,10));
console.log(str.substring(3,5));
let a = 50;
a = a.toString();
console.log(a + 20);
console.log(str.valueOf());
"asc"












