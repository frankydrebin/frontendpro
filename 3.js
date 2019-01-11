// const arr1 = [1, 2, 3, 4]
// const arr2 = [5, 2, 3, 4]

// function compareArrays (arr1, arr2) {
//     let result = [0, 0];
//     for(let i = 0 ;i < arr1.length; i++) {
//         if (arr1[i] > arr2[i]) {
//             result[0]++;
            
//         } else if (arr1[i] < arr2[i]) {
//             result[1]++;
//         } 
//     } 
//     return result;
// }

// console.log(compareArrays(arr1, arr2.reverse()))

'use strict';

function isPrime(value) {
    if (value > 2) {
        for (let i = 2; i < value; i++ ) {
            if (value % i === 0) {
                return false;
            }
        }
        return true
    } else {
        return true
    }
}
const words = ['this', 'is', 'test']; //<span>this</span><span>is</span><span>test</span>

for (let i = 0; i < words.length; i++ ) {
    let result = '';
    result += '<span>' + words[i] + '</span>';
}

// const interpolated = 'Foo'
// const str1 = '<span>' + interpolated + '</span>'; 
// console.log(str1)
// const str2 = `<span>${interpolated}</span>`
// console.log(str2)

const obj = {
    foo: 'bar',
    test: 'test'
}

Object.defineProperty(obj, 'configured', {
   // value: 'descriptor',
    enumerable: true,
    writable: true,
    configurable: true
});
delete obj.configured;
for (let k in obj) {
    console.log(k, obj[k])
}

const arr = [2, 3, 4, -1];
const positiveArr = arr.filter(function (val) {
    return val > 0
});

positiveArr
function myFunc () {
    let posArgs = [].filter.call(arguments, function (val) {
        return val > 0
    })
    posArgs
}
myFunc(1, 2)

//function drawRect(x, y, w, h, color, opacity, back)

function myFunc2 (options) {
   const {a, b, c = 4} = options
   console.log(a, b, c)
}

myFunc2({a: 1, b: 2, c: 3})

let fn2 = myFunc;
eval('console.log(2)')


let fn = function () {

}

let fn1 = () => {

}


const human = {
    name: 'John',
    say: function (isUpper, prefix='mr') {
        console.log(`I am ${prefix} ${isUpper ? this.name.toUpperCase() : this.name}`);
    }
}

// let anotherSay = human.say.bind(human, true, 'mrrr');
// anotherSay()

//human.say.apply(human, [true, 'mr'])

setTimeout((a, b) => human.say(), 2000)


function sum (a, b, c) {
    console.log(this)
    return a+b+c;
}

sum.apply({}, [1, 2, 3])
sum.bind({a: 1}, 1, 2, 3)()

let obj1 = {
    b: 1,
    sum : sum
}

obj1.sum()



