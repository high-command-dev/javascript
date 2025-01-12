const mySym = Symbol("key1");
const jsUser = {
  "full name":"Ashutosh",
  age: 19,
[mySym] : "mykey1", // With Square brackets it will print that it is symbol in output  "[Symbol(key1)]: 'mykey1'"
  location: "India",
  email: "ashutosh@oracle.com",
  isLoggedIn: true,
  lastLoginDays: ["monday","tuesday","wednesday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser.mySym);

// jsUser.email = "ashutosh@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email = "ashutosh@microsoft.com"
// console.log(jsUser);


jsUser.greeting = function(){
  console.log("Hello JS user");
}

console.log(jsUser.greeting());

//myArray = ["h","e","l","l","o"]