class Calculator {
    constructor(r) {
      
        this.operation={
            '+':(a,b)=>(a+b),
            '-':(a,b)=>(a-b),
            '*':(a,b)=>(a*b),
            '/':(a,b)=>(a/b),
            'plus':(a,b)=>(a+b)
        }
      
    }

    addOperator(sign,func){
        this.operation[sign]=func;
    }

    execute(op1,sign,op2) { 
        

        if (sign in this.operation){
            var func= this.operation[sign]
            console.log(`${op1}  ${sign} ${op2} = ${func(op1,op2)}`)
        }
        else {
            console.log(`Invalid operator ${sign}`)
        }
    }

  }


  var  calc = new Calculator();

  calc.execute( 20, "+", 30);  //20 + 30 = 50
  
  calc.execute(40, "-", 30 );  // 40 - 30 = 10 
  
  calc.execute(50,"!", 50);  //invalid operator "!"
  
  
  calc.execute(50, "plus", 40);  // 50 plus 40 = 90

  calc.addOperator('%',(a,b)=>(a%b));

  calc.execute(50, "%", 40);  // 50 plus 40 = 90

