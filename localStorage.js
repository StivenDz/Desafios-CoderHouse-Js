console.log('Ejemplo de Local Storage');

let numbers = [4,5,3,2,1,85];

localStorage.setItem('numbers',numbers);

let numbersBack = localStorage.getItem('numbers');

console.log(typeof numbersBack);
numbersBack = numbersBack.split(',').map(i => Number(i));
console.log(numbersBack);


console.log('\n\n\nLocal Storage con JSON');

let items = [
    {id: 1, name: 'iPhone', price: 1200},
    {id: 2, name: 'Samsung', price: 1000},
    {id: 3, name: 'Xiaomi', price: 400}
]

console.log(items);

let itemsJSON = JSON.stringify(items)

localStorage.setItem('items', itemsJSON)

let itemsFromStorage = localStorage.getItem('items')
console.log(typeof itemsFromStorage);
console.log(itemsFromStorage);

let itemsBack = JSON.parse( itemsFromStorage )
console.log(itemsBack);

