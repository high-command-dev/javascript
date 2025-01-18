// if
const isUserLoggedIn = true

/*
< ->less than
> ->greater than
<= ->less than equal to
>= ->greater than equal to
        \"|"/ 
        (.)(.)
       |  ()  |
    ___| |  | |___
         |  |
         |  |
     ____|  |____
*/

// if(true){

// }


const balance = 1000

// if(balance > 400) console.log("test"),console.log("test2");

// if(balance < 400){
//   console.log("less than 500");
// }else if(balance <750){
//   console.log("less than 750");
// }else if(balance <900){
//   console.log("less than 900");
// }else{
//   console.log("less than 1200");
  
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
  console.log("Eligible to buy the course.");
  
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("User LoggedIn");
  
}

