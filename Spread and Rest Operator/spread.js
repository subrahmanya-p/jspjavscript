// let arr1 = [4, 5, 6, 6, 44, 333, 33];
// let arr2 = [6, 6, 5, 4, 4, 3, 3]
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);
// let arr4 = [0, 0, ...arr1, ...arr2]
// console.log(arr4);
// console.log("----------------------------");

// let obj1 = {
//     name1: "subrahmanya",
//     age1: 21,
//     salary: 50000,
//     city: "sullia"
//     , city1: {
//         s: "fgfg",
//         y: "dhdhd"
//     }
// }
// let obj2 = {
//     name2: "xyz",
//     age2: 25,
//     salary2: 60000,
//     city2: "puttur"
// }
// let obj3 = { ...obj1, ...obj1.city1, ...obj2 }
// console.log(obj3);


let obj = {
    name: " subrahmany",
    age: 45,
    salary: 5666,
    adress: {
        city: "sullia",
        country: ["india", "china", "pakistan"]
    }


}
// let obj2={...obj.adress}
// console.log(obj2);
// //{ city: 'sullia', country: [ 'india', 'china', 'pakistan' ] }


 let num = [1, 2, 3, 4, 5]
        function numbers(a,...b) {
            console.log(b);
            
          
         
        }
 
        numbers(...num) // numbers(1, 2, 3, 4, 5)
       