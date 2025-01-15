function sayMyName(){
  console.log("A");
  console.log("S");
  console.log("H");
  console.log("U");
  console.log("T");
  console.log("O");
  console.log("S");
  console.log("H");
}

// sayMyName ->This is the reference of the Function

// sayMyName() -> This is the compilation of the function

// function addTwo(number1,number2){
// //these are called parameters
//   console.log(number1 + number2);
  
// }
// function addTwo(number1,number2){
//   return number1 + number2;
// }

// // addTwo() ->No Arguments means NaN
// // addTwo(3, null) // two Arguments

// const result = addTwo(3, 8)
// console.log("Result:",result);

function loginUserMessage(userName="Sam"){
  if(!userName){
    return "Please enter a UserName"
  }
  return `${userName} Just Logged In`  
}
// console.log(loginwUserMessage("Ashutosh"));



function calculateCartPrice(...num1){
  return num1
}
//... -> This is the rest operator

// console.log(calculateCartPrice(200, 400, 500)); 

function calculateCartPrice(val1, val2, ...num1){
  return num1
}


// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Ashutosh",
  price:999
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//   username:"sammy",
//   price:899
// })
const myNewArray = [200, 400, 100, 300]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray))

console.log(returnSecondValue([1,2,3,4]))