let car1 = {
    brand: "BMW",
    model: "M4",
    price: 8000000
};

console.log(car1);


let car2 = new Object({
    brand: "Audi",
    model: "A4",
    price: 5000000
});



console.log(car2);


function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
}

let car3 = new Car("Mahinda", "Thar", 6000000);

console.log(car3);


class CarClass {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }


}

let car4 = new CarClass("maruthi", "Alto", 4500000);
console.log(car4);




