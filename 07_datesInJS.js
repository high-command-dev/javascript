// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toString());

// console.log(typeof myDate);

// let myCreatedTime = new Date(2024, 1,29)  
// let myCreatedTime = new Date(2024, 1,29, 5, 3)
// let myCreatedTime = new Date("2023-01-14")
let myCreatedTime = new Date("01-14-2024")
// console.log(myCreatedTime.toDateString());
// console.log(myCreatedTime.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedTime.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth(  + 1));
console.log(newDate.getDay());

// `${newDate.getDay()} and the time

newDate.toLocaleString('default', {
  weekday: "long"
})
