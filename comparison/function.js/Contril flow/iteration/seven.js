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