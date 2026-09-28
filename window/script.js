
import namer from "color-namer"
const names = namer('#FF5733');
console.log(names.ntc[0].name)

// // //  let count=0;
// // //  let interval=setInterval(() => {

// // //     console.log(++count);


// // // }, 2000)
// // // setTimeout(() => {
// // //     clearInterval(interval)
// // // }, 20000)
// // console.log("First One");

// // setTimeout(()=>{
// //     console.log("Middle");


// // },5000)
// // console.log("Last one");


// console.log(Math.sqrt(16));
// console.log(Math.max(56,6,7,7,7,7,6,555));
// console.log(Math.trunc(1000+Math.random()*9000));
// console.log(Math.floor(20.0));
// console.log(Math.ceil(20.0));
// console.log(Math.round(20.5));








let generateColor = () => {

    let colorarr = '0123456789ABCDEF'.split("");
    return `#${colorarr[Math.trunc(Math.random() * 16)]}${colorarr[Math.trunc(Math.random() * 16)]}${colorarr[Math.trunc(Math.random() * 16)]}${colorarr[Math.trunc(Math.random() * 16)]}${colorarr[Math.trunc(Math.random() * 16)]}${colorarr[Math.trunc(Math.random() * 16)]}`
}
console.log(generateColor());
