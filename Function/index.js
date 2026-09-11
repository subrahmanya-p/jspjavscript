// function counter() {
//     let count = 0;
//     function increment() {
//         count++;
//         return count

//     }
//     return increment
// }
// // for (let i = 0; i <= 1000000; i++) {
// //     console.log(counter()());

// // }
//  let res=counter();
//  console.log(res());


(function () {
    console.log("Helooo Babyy");

})();



function first(a) {
    return function second(b) {
        return function third(c) {
            return a + b + c;
        }
    }
}
console.log(first(6)(76)(5));


let curried = (c) => (d) => (e) => c + d + e;
console.log(curried(4)(6)(55));
