const utils = (function () {
    function filterNegative (arr) {
        return arr.filter(function (item) {
            return item >= 0
        });
    }
    return {
        filterNegative: filterNegative
    }
})()


// 1. сделать глубокую копию массива, с учетом того, что там могут быть объекты

obj = {id: 1, name: 'test'}
for(let i in obj) {
    // if not an object  res[i] = obj[i]
}
// 2. Написать функцию, которая возвращает массив строк длинна которых больше N. Функция принимает массив и минимальную длинну строки
// 3. Написать функцию, которая сортирует массив строк по количиству буквы (X)  в слове
//    пример ['world', 'hello']   sortMe(['world', 'hello'], 'l') ---> ['hello', 'world']
// 4. Применить filter, map, в пиццу(из прошлых дз)