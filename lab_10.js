class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    } 

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
} 
const myCar = new Car('Toyota', 2015);
console.log(`My car is a ${myCar.brand} and it is ${myCar.getAge()} years old.`);