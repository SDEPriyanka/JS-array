const ages = [32,65,71,20,14,10];
function checkadult(ages){
      
  const newA =   ages.filter((item) => {
        if(item >= 18){
            return item
        }
    })
     return newA
}

const result = checkadult(ages);
console.log(result)