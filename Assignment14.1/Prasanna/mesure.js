function measureTime(Handler){
    let startTime = Date.now();
    let res= Handler;
  
    let endTime = Date.now();
    return (`function startTime = ${startTime} and function endTime ${endTime} total time taken = ${endTime-startTime}`)
}

try {
module.exports ={
    measureTime
}
}catch{

}
  