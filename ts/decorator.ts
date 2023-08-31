function Log(constructor: Function) {
  console.log(constructor);
}

function Log2(target: any, propName: string | Symbol, index?: number) {
  console.log(target);
  console.log(propName);
  console.log(index);
}

function Log3(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propName);
  console.log(descriptor);
}

@Log
class Compponent {
  // @Log2
  public tttt: number;

  constructor(
    // @Log2
    public name: string
  ) {}

  @Log3
  get() {
    console.log(`olololoolo`);
  }
}
