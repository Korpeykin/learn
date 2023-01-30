abstract class Shape {
  abstract area(): number;
}

class Square extends Shape {
  size: number;
  constructor(size: number) {
    super();
    this.size = size;
  }

  area(): number {
    return this.size ** 2;
  }
}

class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return this.radius ** 2 * Math.PI;
  }
}

class Rect extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  a: number;
  b: number;
  constructor(a: number, b: number) {
    super();
    this.a = a;
    this.b = b;
  }

  area(): number {
    return (this.a * this.b) / 2;
  }
}

class AreaCalculator {
  shapes: Shape[] = [];

  constructor(shapes: Shape[]) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0);
  }
}

const calc = new AreaCalculator([
  new Square(10),
  new Circle(1),
  new Circle(5),
  new Rect(10, 20),
  new Triangle(10, 15),
]);

console.log(calc.sum());
