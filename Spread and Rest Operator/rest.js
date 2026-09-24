let arr = [
    1, 2, 3, 4, 4, 5, 5, 6, 6
]
let [a, ...b] = arr;
console.log(b);

let obj = {
    name: "subramuayaa",
    age: 24
    , salary: 67
    ,
    adresss:{
        city:"subrahmayaa",
        country:["India","china", "russia"]
    }

}
console.log("--------------");

let { name,age,salary,...data }=obj;
console.log(name);
console.log(data);

