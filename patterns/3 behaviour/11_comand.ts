class MyMath {
  num: number;

  constructor(initialValue = 0) {
    this.num = initialValue;
  }

  square = () => {
    return this.num ** 2;
  };

  cube = () => {
    return this.num ** 3;
  };
}

class Command {
  subject: MyMath;

  commandsExecuted: string[] = [];

  constructor(subject: MyMath) {
    this.subject = subject;
  }

  execute(command: Exclude<keyof MyMath, "num">) {
    this.commandsExecuted.push(command);

    return this.subject[command]();
  }
}

const x = new Command(new MyMath(2));

console.log(x.execute("square"));
console.log(x.execute("cube"));

console.log(x.commandsExecuted);
