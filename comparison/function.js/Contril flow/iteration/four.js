//  for of loop

const arr = [1,2,3,4,5]
for( const num of arr){
  console.log(num);
}
  
const greeting = "hello world"
for(const greet of greeting){
  console.log(greet);
  
}



//map
const map = new Map()
map.set('IN', 'India ')
map.set("USA", 'United state of america')
map.set("FR" , "france")
map.set('IN', 'India ')

//console.log(map);


for (const [key ,value] of map){
  console.log(key, ':-',value);
  
}
