const ingridientsProto = {
    add: function (ingredient) {
        this.items.push(ingredient);
    },
    getAll: function () {
        return this.items;
    },
    getByName: function (name) {
        return this.items.find(function (item) {
            return item.name === name
        })
    }
}
function createIngridientsList () {
    let list = Object.create(ingridientsProto);
    list.items = [];
    return list;
}
let myIngredients = createIngridientsList();
myIngredients.add({name: 'tequila', price: 5})
myIngredients.add({name: 'vodka', price: 3})
console.log(myIngredients.getByName('tequila'))


