// замыкания

function user(defName: string) {
  let _name = defName;

  return {
    getName(): string {
      return _name;
    },
    setName(n: string): void {
      _name = n;
    },
  };
}

function animals(type: string, defName: string) {
  let _name = defName;

  function rabbitRun() {
    console.log("rabbit runs");
  }

  function animalRun() {
    console.log("animal runs");
  }

  return class Animals {
    public get name(): string {
      return _name;
    }

    public set name(v: string) {
      _name = v;
    }

    run = type === "rabbit" ? rabbitRun : animalRun;
  };
}

const rabbitAnimal = new (animals("rabbit", "Bobik"))();

const singleAnimal = new (animals("slon", "Mmmm"))();

rabbitAnimal.run();
singleAnimal.run();
