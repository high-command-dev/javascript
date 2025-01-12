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
// console.log(loginUserMessage("Ashutosh"));



function calculateCartPrice(...num1){
  return num1
}
//... -> This is the rest operator

console.log(calculateCartPrice(200, 400, 500));