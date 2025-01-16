const user = {
  username: "Ashutosh",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username} , welcome to website`);
    // console.log(this);
  }


}
// user.welcomeMessage();
// user.username = "Sammy"
// // user.welcomeMessage()

// // console.log(this);

// function chai(){
//   let username = "Ashutosh"
//   console.log(this.username); 
// }
// chai()

// const chai = function(){
//   let username = "Ashutosh"
//   console.log(this.username);
// }

// const chai = () => {
//   let username = "Ashutosh"
//   console.log(this.username);
// }
// chai()

?

// const addTwo = (num1, num2) => (num1 + num2)


const addTwo = (num1, num2) => ({username:"Ashutosh"})
// console.log(addTwo(3, 4));



// const arr  = [1,3,5,7,8]
