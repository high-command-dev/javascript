//  Immediately Invoked Function Expressions(IIFE)

// Named  IIFE
(function chai(){
  console.log("DB Connected");
  
})();

(   () => {
  console.log("DB Connected");
} )();

 
(  function ourcode ()  {
  console.log("DB Connected Two");
} )()