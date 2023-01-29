class SimpleMembership {
  name: string;
  cost: number;
  constructor(name: string) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  name: string;
  cost: number;
  constructor(name: string) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  name: string;
  cost: number;
  constructor(name: string) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership,
  };

  create(name: string, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Vladilen", "simple"),
  factory.create("Elena", "premium"),
  factory.create("Vasilisa", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr"),
];

members.forEach((m) => {
  m.define();
});
