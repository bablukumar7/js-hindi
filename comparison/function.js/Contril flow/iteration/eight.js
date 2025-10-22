const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc , currval){
//   console.log(`acc : ${acc} and currval : ${currval}`);
//   return acc + currval
// } , 0)
// console.log(myTotal);


const myTotal = myNums.reduce((acc , curr) => acc + curr , 0)
console.log(myTotal);



const shopingCart = [
  {
    itemName : "js course",
    price : 999
  },
  {
    itemName : "python course",
    price : 1999
  },
  {
    itemName : "react course",
    price :2999
  },
  {
    itemName : "node js course",
    price : 3999
  },
  {
    itemName : "sql course",
    price : 4999
  },
  {
    itemName : "redux course",
    price : 5999
  },
]

 const  priceTopay = shopingCart.reduce( (acc , item) =>  acc + item.price,0)
 console.log(priceTopay);
 
