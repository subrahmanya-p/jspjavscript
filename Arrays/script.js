let aa = [4, 4, 3, 4, 3, 44, 4, 3, 3, 90]
// console.log(aa.pop(90, 3));
// console.log(aa);
// console.log(aa.push(6,5));
// console.log("removed ele:",aa.shift());
// console.log(aa.unshift(90,9));
let b = [3, 45, 5, 5, 5]






let newarr = aa.filter((num) => {
    return num > 6
})
// console.log(aa);
console.log(newarr);

console.log("Some Method: " + b.some((ele) => {
    ele > 1
}));

console.log("Find Method: " + b.find((ele, index) => {
    console.log(index);

    return ele > 44
}));

console.log("For each :");

b.forEach((value, index, array) => {
    console.log(value, index, array);



})
console.log("For in  Index");

for (let index in b) {
    console.log(index);

}
console.log("For  of Values");

for (let value of b) {
    console.log(value);

}