// let firstPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Resve by 1st")
//     }, 2000);

// })
// let SecondPromise = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Resve by 2nd")
//     }, 5000);

// })
// let Thirdpromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Rejecyed by 3rd")
//     }, 1000);

// })

// ///


// Promise.all([firstPromise, SecondPromise, Thirdpromise]).then((res) => {
//     console.log(res);


// }).catch((err) => {
//     console.log(err);


// })













// // Promise.any([firstPromise, SecondPromise, Thirdpromise]).then((res) => {
// //     console.log(res);


// // }).catch((err) => {
// //     console.log(err);


// // })







import data from "./dtaa.json" with { type: "json"};

data.map((ele) => {
    console.log(ele.id);
    console.log(ele.name);
    console.log(ele.price);
    console.log(ele.rating);
    console.log(ele.category);
    console.log(ele.inStock);


    console.log("---------------");


})




