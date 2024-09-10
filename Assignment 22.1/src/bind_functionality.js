function customBind(fn,object){ //eat,person
    return(...args)=>{ //food
        object.fn = fn; //person.eat = eat
        let result = object.fn(...args); // result = person.eat("food"); result = "hari eating food";
        delete object.fn; 
        return result;
    }
}

function eat(food){
    return `${this.name} eating ${food}`;
}

var person1 = {
    "name" : "hari"
}

var person2 = {
    "name" : 'suresh',
}

person1.eat = customBind(eat,person1);
person2.eat = person1.eat;

console.log(person1.eat("lunch")); // hari eating lunch
console.log(person2.eat('dinner'));// hari eating dinner