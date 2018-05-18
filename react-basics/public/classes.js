class Car{
    constructor(){
        this.wheels = 4;
        this.type = 'Hatchback';
    }
    foo(){
        console.log('hey')
    }
}

class Ford extends Car{
    constructor(){
        super();
    }
}

const car = new Car();
const ford = new Ford();

car.foo()
console.log(ford.wheels)