let arr = [
    7, 42, 89, 15, 63, 28, 94, 51, 3, 76,
    34, 68, 19, 100, 45, 82, 11, 57, 26, 73,
    39, 5, 91, 60, 18, 87, 31, 66, 24, 49,
    96, 12, 70, 37, 84, 9, 55, 22, 78, 43,
    61, 4, 99, 30, 71, 16, 88, 53, 27, 65
];


let arr1 = arr.map((n) => {
    return n * 5
})
let arr2 = arr.map((n) => {
    return n * 100
})
let arr3 = arr.map((n) => {
    return n + 100
})
let arr4 = arr.map((n) => {
    return n * 1000
})
let arr5 = arr.map((n) => {
    return n * 5000
})

console.log("Original Array:" + (arr));
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);




