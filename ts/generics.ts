type TypeFactory<X> = X;

type MyType = TypeFactory<string>;

interface ValueContainer<Value> {
  value: Value;
}

type StringContainer = ValueContainer<string>;

const x: StringContainer = {
  value: "sdfsfd",
};

class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<Type> {
  constructor(public collection: Type[]) {}

  get(index: number): Type {
    return this.collection[index];
  }
}
