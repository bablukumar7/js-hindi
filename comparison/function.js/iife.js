// Immediately invoked function expression (iife)
(function chai(){
  console.log(`DB CONNECTED`);
  
})();


( (name) =>{
  console.log(`DB connected Two ${name}`);
  
})('bablu kumar')