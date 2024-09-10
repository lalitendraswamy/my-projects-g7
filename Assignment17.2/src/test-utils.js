
function donnable(done,cb){

    return (...param)=>{
        
        try{
    
            cb(...param);
            done(); 
        }catch(e){
            done(e);
        }
    }
}


module.exports={
    donnable
};