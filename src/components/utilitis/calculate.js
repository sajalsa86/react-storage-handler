const add = (first, secound) => first + secound;

const multiyer = (first, secound) => first * secound;

const division = (first, secound) => first / secound;

//example of reduce using array
/* const numbers = [10, 20, 30, 40, 50];
const arrReduce = (privious, current) => privious + current;
const grandTotal = numbers.reduce(arrReduce, 0);
console.log(grandTotal); */

//example of reduce using array of object
/* const products = [
    { name: 'Alta', price: 100 },
    { name: 'Nalis', price: 100 },
    { name: 'Palish', price: 100 },
];

const objReduce = (privious, current) => privious + current.price;
const totalPrice = products.reduce(objReduce, 0);
console.log(totalPrice); */

const getTotalPrice = products => {
    const priceReduce = (privious, current) => privious + current.price;
    const totalPrice = products.reduce(priceReduce, 0);
    return totalPrice;
};
export {
    add,
    multiyer,
    division,
    getTotalPrice as getTotal
};
