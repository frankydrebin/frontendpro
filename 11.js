const showButton = document.getElementById('show-button');
const filterInput = document.getElementById('filter-coctails');
const listElement = document.getElementById('cocktail-list');

class Cocktail {
    constructor (name, ingredients, isAlcohol, type) {
        this.name = name; // instance property
        this.ingredients = ingredients;
        this.isAlcohol = isAlcohol;
        this.type = type;
    }
    getPrice() { // methods of prototype
        return this.ingredients.reduce(function (sum, ingredient) {
            return sum+ingredient.price
        }, 0)
    }
}

class CocktailsList {
    constructor () {
        this.list = []
    }

    add (cocktail) {
        this.list.push(cocktail)
    }

    getAll () {
        return this.list;
    }
    
    renderFiltered (name) {
        let list = this.list.filter(function (item) {
            return item.name.indexOf(name) === 0;
        })
        return this.render(list);
    }

    render(list) {
        let cocktails = list || this.list
        let fragment = document.createDocumentFragment();

        cocktails.forEach(function (item) {
            let cocktailItem = document.createElement('div');
            cocktailItem.innerText = item.name;
            cocktailItem.className = 'cocktail';
            fragment.appendChild(cocktailItem);
        })
        return fragment;
    }
}


let list = new CocktailsList();
list.add(new Cocktail('margarita', [{name: 'tequila', price: 5},{name: 'lime', price: 3} ], true, 'long'))
list.add(new Cocktail('old fashioned', [{name: 'wiskey', price: 6},{name: 'bitter', price: 3} ], true, 'long'))
const showList = function () {
    
    listElement.innerHTML = '';
    listElement.appendChild(list.render())
}
showButton.addEventListener('click', showList);

filterInput.addEventListener('input', function (event) {
    listElement.innerHTML = '';
    listElement.appendChild(list.renderFiltered(this.value))
});