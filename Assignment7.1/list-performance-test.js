var { LinkedList } = require('./list');
var list = new LinkedList();
function createList(count) {
    
    for (var i = 1; i <= count; i++)
        list.append(i);

    return list;
}

function sumList(list) {
    var result = 0;
    for (var i = 0; i < list.size(); i++)
        result += list.get(i);

    return result;

}

function sumList2(list) {
    var result = 0;
    list.forEach(v => result+=v);
    return result;

}



function test(){
    var max=100000;

    var start=performance.now();
    createList(max);
    var end = performance.now();
    console.log('Time taken to create list:', end - start); // in milliseconds


    var start=performance.now();
     result = sumList(list);
    var end = performance.now();
    console.log('Time taken to sum list:', end - start); // in milliseconds
    console.log('result',result)

    var start=performance.now();
     result = sumList2(list);
    var end = performance.now();
    console.log('Time taken to sum list by using forEach:', end - start); // in milliseconds
    console.log('result',result)
}

test();