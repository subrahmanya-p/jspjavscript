let Triangle = () => {
    let b = 45;
    let h = 56;
    return 0.5 * b * h
}
let rectAngle = () => {
    let w = 45;
    let h = 56;
    return w * h
}
let trapeZoid = () => {
    let h = 45
    let b = 45;

    let a = 12;
    return 0.5 * (a + b) * h
}
let Ellipse = () => {
    let a = 12;
    let b = 34;
    return Math.PI * a * b
}
let Square = () => {
    let a = 13;
    return a * a
}
let Parallelogram = () => {
    let h = 45
    let b = 45;
    return b * h;
}
let Circle = () => {
    let r = 23;
    return Math.PI * (r * r)
}
let sector = () => {
    let r = 23;
    let theta = 90
    return 0.5 * (r * r) * theta;

}
console.log(Triangle());
console.log(trapeZoid());
console.log(Ellipse());
console.log(Circle());
console.log(Square());
console.log(sector());
console.log(Parallelogram());
console.log(rectAngle());
