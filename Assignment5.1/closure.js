function Employee(id,name){
     
    this.setName=function(newName){
        name=newName;
    }
 
    this.setNewVariable=function(newVaraiable,value){
        newVaraiable=value;
        return newVaraiable;
    }

    // this.callClosureFunction=function(){
    //     return 
    // }


}



 
 
var employee=new Employee(1,'Lalit')
 
console.log(employee.setNewVariable('email','lakonna@gmail.com'))
 
 
console.log(employee.setNewVariable())