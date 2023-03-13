class Car {
    constructor(brand, model, year, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}
class Mercedes extends Car {
    constructor(model, year, color, price) {
        super("Mercedes", model, year, color);
        this.price = price;
    }
    getInformation() {
        return `Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}, Price: ${this.price} dollars`;
    }
}
class BMW extends Car {
    constructor(model, year, color, topSpeed) {
        super("BMW", model, year, color);
        this.topSpeed = topSpeed;
    }
    getInformation() {
        return `Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}, Top speed: ${this.topSpeed} km/h`;
    }
}
class Audi extends Car {
    constructor(model, year, color, mileage) {
        super("Audi", model, year, color);
        this.mileage = mileage;
    }
    getInformation() {
        return `Brand: ${this.brand}, Model: ${this.model}, Color: ${this.color}, Year: ${this.year}, Mileage: ${this.mileage} km`;
    }
}
const cars = [
    new Mercedes("E-Class", 2020, "Black", 50000),
    new Mercedes("S-Class", 2021, "White", 70000),
    new BMW("M3", 2019, "Blue", 250),
    new BMW("X5", 2022, "Red", 300),
    new Audi("A4", 2018, "Gray", 80000),
    new Audi("Q7", 2020, "Silver", 40000)
];
let carsTable = document.getElementById("cars-table");
cars.forEach(car => {
    const row = document.createElement("tr");
    const desc = car.getInformation().split(", ");
    desc.forEach(prop => {
        const cell = document.createElement("td");
        cell.textContent = prop.split(": ")[1];
        row.appendChild(cell);
    });
    carsTable.appendChild(row);
});