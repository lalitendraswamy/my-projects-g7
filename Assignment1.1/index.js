let numberEl = document.getElementById('number');
let addBtnEl = document.getElementById('add');
let resetBtnEl = document.getElementById('reset');
let clearBtnEl = document.getElementById('clear');
let sumBtnEl = document.getElementById('sum');
let averageBtnEl = document.getElementById('average');
let maxBtnEl = document.getElementById('max');
let refreshBtnEl = document.getElementById('refresh');
let numbersListEl = document.getElementById('numbers-list');
let consoleEl=document.getElementById('console')


if (!localStorage.getItem('arr')) {
    localStorage.setItem('arr', JSON.stringify([]));
}

function deleteEl(n){
   let numberArr = JSON.parse(localStorage.getItem('arr')); 
   const index = numberArr.indexOf(n);
   numberArr.splice(index, 1);
    

   localStorage.setItem('arr', JSON.stringify(numberArr)); 
   updateNumberList();
   
}


function addNumber(n) {
   
    numbersListEl.innerHTML+=`<li>${n} <button onclick='deleteEl(${n})'>x</button></li> `    
    
}


function updateNumberList(){
   let numberArr = JSON.parse(localStorage.getItem('arr'));
   numbersListEl.textContent='';
for (let element of numberArr) {
   addNumber(element)
}
}

updateNumberList()

addBtnEl.addEventListener("click", function() {
   let numberArr = JSON.parse(localStorage.getItem('arr')); 
    numberArr.push(parseInt(numberEl.value)); 
   localStorage.setItem('arr', JSON.stringify(numberArr)); 
    numberEl.value = '';
    updateNumberList();
});

resetBtnEl.addEventListener("click", function() {
   localStorage.setItem('arr', JSON.stringify([]));
   numberEl.value=''
   consoleEl.textContent=''
   numbersListEl.textContent=''
});

refreshBtnEl.addEventListener("click", function() {
   location.reload();
});



clearBtnEl.addEventListener("click", function() {
   numberEl.value = '';
   consoleEl.textContent='';
   while (numbersListEl.firstChild) {
      numbersListEl.removeChild(numbersListEl.firstChild);
  }

});


sumBtnEl.addEventListener("click", function() {
    let numberArr = JSON.parse(localStorage.getItem('arr')); 
    let sum = numberArr.reduce((acc, num) => acc + num, 0); 
    
    consoleEl.textContent=`Sum of numbers is ${sum}`;
});


averageBtnEl.addEventListener("click", function() {
   let numberArr = JSON.parse(localStorage.getItem('arr')); 
   let sum = numberArr.reduce((acc, num) => acc + num, 0); 
   let average=sum/(numberArr.length);
   consoleEl.textContent = `Average of numbers is ${average.toFixed(2)}`;
   
});


maxBtnEl.addEventListener("click", function() {
   let numberArr = JSON.parse(localStorage.getItem('arr')); 
   let sum = numberArr.reduce((acc, num) => acc + num, 0); 
   consoleEl.textContent=`Max of numbers is ${numberArr.sort()[numberArr.length-1]}`;
});
