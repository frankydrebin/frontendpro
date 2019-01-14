function a (val1, val2) {
}

function myFunc () {
    let str = 'test string';
    if (str !== undefined) {
        let prefix = 'if';
        console.log(prefix + str)
    }
    function nested () {
        console.log(str);
    }
    str = '5'
    return nested
}
var nestedFn = myFunc();

nestedFn()


function toUpperCase(str) {
    //var result
    if (typeof str === 'string') {
        var result = str.toUpperCase();
        return result;
    } else {
        var result = String(str).toUpperCase();
        return result
    }
}



function shadowing () {
    let value = 3;
    return function nested () {
        let value = "value"
        console.log(value);
    }
}

exampleFn = shadowing();

exampleFn()

function hoisting () {
    //var value;
    let value2 = 'let'
    nested()
    // console.log(value)
    // console.log(value2)
    var value = 5;
    let nested = function () {
        console.log(value2);
    }
}

// let fn = function () {
//     console.log('fn')
// }
const margarita = { name: 'not even a pizza'}
var pizza = (function () {
   let margarita = {
       name: 'margarita'
   }
   return {
       getPizzaName : function () {
           return margarita.name;
       }
   }
})();
console.log(pizza.getPizzaName())


// Написать Функцию, которая будет возвращать объект "human" который будет иметь 
// поля: Name, Age, и метод getName
// И создать 3 человека использую эту функцию

function createHuman (name, age, parents) {
    //var name=John, age = 16
    return {
        name: name,
        age: age,
        getName: function () {
            return this.name;
        },
        parents: parents
    }
}
let john = createHuman('John', 16);
let jen = createHuman('Jeniffer', 20);
let michael = createHuman('Michael', 1, [john, jen])

jen
// let peter = createHuman('Peter', 26)
// john.name = 'Jim';
// peter
// console.log(john.getName())

function createSmth(version) {
    return {
        getVersion () {
            return version;
        }
    }
} 
let myApi = createSmth('0.1')
console.log(myApi.getVersion())

// создать функцию которая вернет объект, 
// содержащий методы реализующие основные арифметические операции (+ - * /)
// добавить метод clear
// добавить метод showResult (=) 

function createCalc() {
    let result = 0;
    return {
        //...
    }
}




// Два типа пицц - из меню 
// Пицца наборная - цена которой вычисляется из суммы ингридиентов 

/*
    Pizza
    {
        name: ''                  // ''
        ingridients: [ingridient] // [{name: 'cheese', price: 2}, {name: 'tomato', price: 3}]
        price: number
        type: custom || menu
        getPrice: 
    }
    Ingridient {
        name: '',
        price: number
    }
*/

createPizza('margarita', 25, [{name:'cheese', price: 3}, {name:'basil', price: 4}, {name:'tomato', price: 4}])
createPizza('Pizza order number 25', 20, [{name:'cheese', price: 3}, {name:'basil', price: 4}, {name:'tomato', price: 4}])

// Функция которая создает пиццы по типу create human (название, ингридиенты, цена)
// Функция которая создает пиццы - просто по ингридиентам (ингридиенты)
// Функция которая Pizza Manager - которая создает пиццы, на основе массива который передаем