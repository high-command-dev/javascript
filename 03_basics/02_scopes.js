var c = 300;
let a = 300
if(1){
  let a = 10
  // const b = 20
  // console.log("INNER", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "Ashutosh"

  function two(){
    const website = "Youtube"
    console.log(username);
  }
  // console.log(website);
  two()

}

// one()

if(1){
  const username = "Ashutosh"
  if(username === "Ashutosh"){
    const website  = " Youtube"
    // console.log(username + website);
    
  }
  // console.log(website);
  
}
// console.log(username);


//******************intersting******** */
// addOne(5)
console.log(addOne(5));

function addOne(num){
  return num + 1
}

addOne(5)

console.log(addTwo(5));

const addTwo = function (num){
  return num + 2
}

addTwo(5)