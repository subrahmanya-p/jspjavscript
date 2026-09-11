const numbers = [10, 100, 90, 20, 30, 40, 50];

let sum = numbers.reduce((total, current) => {
    return total + current
}, 0)

console.log("Sum is :" + sum);
let maxNum = numbers.reduce((max, current) => {
    return max >= current ? max : current
},)

console.log("Max is :" + maxNum);


const numbers2 = [1, 2, 1, 3, 2, 1, 4, 2];
let maxoccured = numbers2.reduce((count, currenValue, index, arr) => {
   
    

    return currenValue === 2 ? count + 1 : count
}, 0)

console.log(maxoccured);

//


const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 },
    { name: "Headphones", price: 3000 }
];

let sumdata = cart.reduce((sum, current) => {
    return current.price + sum;

}, 0)
console.log(sumdata);


//product
const numbers3 = [1, 2, 1, 3, 2, 1, 4, 2];

let product = numbers3.reduce((product, currenValue) => {
    return product * currenValue
}, 1)

console.log(product);
