class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  cars: Car[];

  constructor() {
    this.cars = [];
  }

  create(model: string, price: number) {
    const candidate = this.getCar(model);

    if (candidate) {
      return candidate;
    }

    const newCar = new Car(model, price);
    this.cars.push(newCar);
    return newCar;
  }

  getCar(model: string) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const bmwX6 = factory.create("bmw", 10000);
const audi = factory.create("audi", 12000);
const bmwX3 = factory.create("bmw", 8000);

console.log(bmwX3 === bmwX6);

// class Car {
//   model: string;
//   price: number;
//   constructor(model: string, price: number) {
//     this.model = model;
//     this.price = price;
//   }
// }

// class CarFactory {
//   cars: Map<string, Car> = new Map<string, Car>();

//   create(model: string, price: number) {
//     const carExists = this.cars.has(model);

//     if (carExists) {
//       return this.cars.get(model);
//     }

//     const newCar = new Car(model, price);

//     this.cars.set(model, newCar);

//     return newCar;
//   }
// }

// const factory = new CarFactory();

// const bmwX6 = factory.create("bmw", 10000);
// const audi = factory.create("audi", 12000);
// const bmwX3 = factory.create("bmw", 8000);

// console.log(bmwX3 === bmwX6);
