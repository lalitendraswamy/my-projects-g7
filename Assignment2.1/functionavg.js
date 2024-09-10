function numbers() {
    sum=0
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum/arguments.length;
  }
  
  console.log(numbers(1, 2, 3,5));