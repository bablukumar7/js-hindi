// for off loop

// ["" , "" ]
// [ {} , {}]


let array = [ 1,2,3,4,5]

for(let num of array){
  console.log(`value is ${num}`);
  
}

const greetings = "hello world"

for(const greet of greetings){
  console.log(`each character is ${greet}`);
  
} 

// map

const map = new Map()
map.set('IN' , "India")
map.set('US' , "America")
map.set('FR' , "France")

//console.log(map);

for (const [key , value] of map){
  console.log(key, ':-',value);
  
}

const myobject = {
  js : 'javascript',
  py : 'python',
  rb : 'ruby'
}
for (const key in myobject){
  console.log(`${key} shortcut is for ${myobject[key]}`);
  
}
