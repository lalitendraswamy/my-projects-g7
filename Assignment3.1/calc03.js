var val1El=document.getElementById('val1');
var val2El=document.getElementById('val2');
var operatorEl=document.getElementById('operator');
var resultEl=document.getElementById('result');

function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }

function multiply(a, b) { return a * b; }

function divide(a, b) { return a / b; }

function consoleOutput(){
    
}

function Calculator() {

    operators = {
        plus: plus, //Es5 syntax
        minus,     //ES2015 syntax,
        multiply,
        divide

    }

    this.execute = function (value1, oprName, value2) {

        if (operators[oprName]) { //if this key is present
            var opr = operators[oprName]; //take the function.
            var result = opr(value1, value2);
            var output = `${value1} ${oprName} ${value2} = ${result}`;
            resultEl.textContent=output;
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
};



// function testCalculator(calc, message) {
//     console.log(message);
//     calc.execute(10, "plus", 5);
//     calc.execute(10, "minus", 5);
//     calc.execute(10, "multiply", 5);
//     calc.execute(10, "divide", 4);
//     calc.execute(10, "mod", 4);
//     calc.execute(10, "+",2);
//     calc.execute(10, "%", 4);
//     console.log('----------\n\n')
// }

var calc = new Calculator();

// testCalculator(calc,"Original Functionality Set");


//extending the functionality

calc.addOperator(multiply,'*'); //take the method names
calc.addOperator(divide,'/'); //take the method name

// testCalculator(calc,"Multiply and Divide Added");

calc.addOperator(plus,"add","plus","+","sum");
calc.addOperator(minus,"add","plus","-","sum");

calc.addOperator((x,y)=>x%y, "mod","%");

// testCalculator(calc,"Custom Operators Added");


function getResult(){
    let val1=parseInt(val1El.value)
    let val2=parseInt(val2El.value)
    
    calc.execute(val1,operatorEl.value,val2)
    
    
}