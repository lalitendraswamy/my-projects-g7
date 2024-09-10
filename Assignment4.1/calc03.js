// var val1El=document.getElementById('val1');
// var val2El=document.getElementById('val2');
// var operatorEl=document.getElementById('operator');
// var resultEl=document.getElementById('result');
// var resTypeEl=document.getElementById('resType');

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function presentOnFrontend(output){
    resultEl.textContent=output;
}

function presentOnConsole(output){
    console.log(output);
    // resultEl.textContent="Check Console for result (ctrl+shift+i)";
}



function Calculator() {

    operators = {
        plus: plus, //Es5 syntax
        minus,     //ES2015 syntax,
        multiply,
        divide

    }

    presenter = {
        presentOnFrontend,
        presentOnConsole,
        
    }

    this.presentResult= function(presentType,output){
        if(presenter[presentType]){
            var presentFunc=presenter[presentType];
            presentFunc(output);
        }else {
            console.log(`Invalid operation ${opr}`);
        }
    }

    this.execute = function (value1, oprName, value2,presentType) {

        if (operators[oprName]) { //if this key is present
            var opr = operators[oprName]; //take the function.
            var result = opr(value1, value2);
            var output = `${value1} ${oprName} ${value2} = ${result}`;
            this.presentResult(presentType,output)
            
        } else {
            console.log(`Invalid operation ${opr}`);
        }

    }

    this.addOperator = function (operator, ...names) {

        if (names.length) {
            for (var name of names) {
                operators[name] = operator;
            }
        } else {
            operators[operator.name] = operator;
        }

    }

    this.addPresenter = function (presentFunc, id) {

        presenter[id] = presentFunc;
    }     

};





var calc = new Calculator();

//extending the functionality

calc.addOperator(multiply,'*'); //take the method names
calc.addOperator(divide,'/'); //take the method name

// testCalculator(calc,"Multiply and Divide Added");

calc.addOperator(plus,"add","plus","+","sum");
calc.addOperator(minus,"add","plus","-","sum");

calc.addOperator((x,y)=>x%y, "mod","%");

// testCalculator(calc,"Custom Operators Added");

calc.addPresenter((output)=> alert(output), "presentOnAlert");
calc.addPresenter((output)=>localStorage.setItem("res",output),"presentOnLocalStorage")


function getResult(){
    // let val1=parseInt(val1El.value)
    // let val2=parseInt(val2El.value)
    // let presentType= resTypeEl.value;
   
    // calc.execute(val1,operatorEl.value,val2,presentType)
    calc.execute(5,'+',7,'presentOnConsole');
    
    
}





getResult();