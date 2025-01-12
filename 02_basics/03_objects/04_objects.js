// const tinderUser = new Object()
// console.log(tinderUser);

const tinderUSER = {}
tinderUSER.id  = "123abc"
tinderUSER.name = "Ashutosh"
tinderUSER.isLoggedIn = false
// console.log(tinderUSER);

const regularUser = {
  email : "some@gmail.com",
  fullName:{
    userFullName:{
      firstName : "Ashutosh",
      lastName : "Negi"
    }
  }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",4: "d"}
const obj4 = {5:"c",6: "d"}

// const obj3 = Object.assign({}, obj1 ,obj2,obj4);

const obj3  = {...obj1, ...obj2};
// console.log(obj3);



const users = [

  {
    id: 1,
    email : "h@gmail.com"
  },
  {
    id: 1,
    email : "h@gmail.com"
  },
  {
    id: 1,
    email : "h@gmail.com"
  },
  {
    id: 1,
    email : "h@gmail.com"
  },

]
// console.log(users[1].email);

// console.log(tinderUSER);

// console.log(Object.keys(tinderUSER));
// console.log(Object.values(tinderUSER));
// console.log(Object.entries(tinderUSER));

// console.log(tinderUSER.hasOwnProperty('isLoggedIn'));

// console.log(tinderUSER.hasOwnProperty('isLoggedOut'));


const course = {
  courseName:"Machine Learning",
  price: "9999",
  courseInstrutor: "Ashutosh"
}

// course.courseInstructor

const {courseInstrutor:instructor} = course
//de-structuring of an object
console.log(instructor);


// const navBar = ({company}) =>{
  
// }
// navBar(company = "Ashutosh")

// Format of API 
// {
//   "name":"Ashutosh",
//   "courseName": "Ai and LLM",
//   "price": "free",
// }

[
  {},
  {},
  {}
]