let returned = (function () {
    let foo = 4;

    return {
        bar: function () {
            return foo;
        }
    };
})()


// создать объект -  ticket manager
// изначально есть 10 билетов
// есть метод который позваляет купить n билетов 
// если билетов нет - то нельзя купить и получаем сообщение - нет билетов
// метод - посмотреть количество оставшивхя билетов

const ticketManager = {
    tickets: 10,
    buyTickets: function (n) {
        if (this.tickets - n < 0 ) {
            console.log(`can't sell ${n} tickets`)
        } else {
            console.log(`here is your ${n} tickets`)
            this.tickets -= n;
        }
    },
    showAvailableTickets: function () {
        return this.tickets;
    }
}
function createTicketManager (ticketsCount)  {
    let tickets = ticketsCount;
    return {
        buyTickets: function (n) {
            if (tickets - n < 0 ) {
                console.log(`can't sell ${n} tickets`)
            } else {
                console.log(`here is your ${n} tickets`)
                tickets -= n;
            }
        },
        showAvailableTickets: function () {
            return tickets;
        }
    }
}

const ticketManager1 = createTicketManager(10);

ticketManager1

let arr1 = [4, 2]
//    index 0  1  2  3  4  5 
let arr2 = [1, 2, 3, 4, 5, 6] // [1, 2, 3, 777, 77, 7, 4, 5, 6 ]

var res = arr2.splice(2, 0, 777, 77, 7 )
res
console.log(arr2)


function clearArray (arr) {
    arr.splice(0)
}
let myArray = [1, 2, 3, [2, 3]];

let testArray1 = myArray.slice()
testArray1
testArray1[0] = 5;
testArray1
myArray
testArray1[3][0] = 999;
testArray1

arr3 = ["a", "b", "c"];
arr3 = [];
arr3.length = 0

//* Написать функцию которая возвращает глубокую копию массива.(или хотябы на 1 уровень глубже чем slice)

// Написать функцию которая будет копировать элементы одного массива в другой

// Написать функцию которая удаляет самый минимальный элемент массива из него (все элементы числа)

// Написать функцию которая сортирует массив строк по длине, по возрастанию и по убыванию

// Обернуть все это в объект (условный API)



// arr3.shift()
// arr3
// arr3.splice(0)
// arr3

// arr3

