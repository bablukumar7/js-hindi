// for each loop

const coding =["javascript", "python","ruby","java","cpp"]
coding.forEach(function (val,index) {
  console.log(val,index);
  
})

coding.forEach( (item) =>{
  console.log(item);
  
})


const mycoding = [
  {languageName : "javascript",
    languageFileName : "js"
  },

   {languageName : "python",
    languageFileName : "py"
  },

   {languageName : "cpp",
    languageFileName : "c++"
  },

   {languageName : "react",
    languageFileName : "react.js"
  },
]

mycoding.forEach( (item) =>{
  console.log(item.languageFileName);
  
})

  // const mynums = [1,2,32,4,56,7,8,9,10]

  // const newnums = mynums.filter( (num) =>{
  //   return num > 4
  // })
  // console.log(newnums);



  // const newNums = []

  // mynums.forEach((num) =>{
  //   if(num > 4){
  //     newNums.push(num)
  //   } 
  // })
  // console.log(newNums);


  const books = [
    {tittle: "book one" , genre: "friction" , publish:1981},
    {tittle: "book two" , genre: " non friction" , publish:1982},
    {tittle: "book three" , genre: "history" , publish:1983},
    {tittle: "book one" , genre: " non friction" , publish:1984},
    {tittle: "book one" , genre: "science" , publish:1985},
    {tittle: "book one" , genre: "homescience" , publish:1986},
    {tittle: "book one" , genre: "friction" , publish:1987},
    {tittle: "book one" , genre: " non friction" , publish:1989},
  ];
  let userBooks = books.filter( (bk) => bk.genre === "friction"
)

  userBooks = books.filter( (bk) => { return bk.publish >= 1982})
  console.log(userBooks);
  
    
  const myNumbers = [1,2,3,4,5,6,7,8,9,10]

  //const newNums = myNumbers.map((num) => {return num + 30})
  const newNums = myNumbers
                      .map((num) => num * 10)
                      .map((num) => num +2)
                      .filter((num) => num >= 40)
  console.log(newNums);
  
  f
  