function measurePerformance(func,...args){
    var startTime=performance.now()
    var result=func(...args)
    var endTime=performance.now()
    return `Time taken to ${func.name}: ${endTime-startTime} milliseconds` 
}

try{
    module.exports={
        measurePerformance
    }
}catch(e){
    
}