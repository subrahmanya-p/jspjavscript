let arr = [
    7, 42, 89, 15, 63, 28, 94, 51, 3, 76,
    34, 68, 19, 100, 45, 82, 11, 57, 26, 73,
    39, 5, 91, 60, 18, 87, 31, 66, 24, 49,
    96, 12, 70, 37, 84, 9, 55, 22, 78, 43,
    61, 4, 99, 30, 71, 16, 88, 53, 27, 65
];

let even = arr.filter((num) => {
    return num % 2 == 0;
});

let odd = arr.filter((num) => {
    return num % 2 != 0;
});

let gthen20 = arr.filter((num) => {
    return num >= 20;
});

let lsthen30 = arr.filter((num) => {
    return num <= 30;
});

let lsth50 = arr.filter((num) => {
    return num <= 50;
});

console.log("Original array:", arr);
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
console.log("Numbers greater than or equal to 20:", gthen20);
console.log("Numbers less than or equal to 30:", lsthen30);
console.log("Numbers less than or equal to 50:", lsth50);