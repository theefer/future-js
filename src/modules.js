module Something {
  export function done() {
    var n = new Animal("jo");
    n.run();
  }

  export class Animal {
    constructor(name) {
      this.name = name;
    }

    run(...args) {
      console.log(this.name);
      args.forEach(function(arg) {
        console.log(arg);
      });
      // for (let arg of args) {
      //   console.log(arg);
      // }
    }

    get name() { return this.name_; }
    set name(n) { this.name_ = "Mr. " + n; }
  }

  export class Dog extends Animal {
    constructor(dogName) {
      super(dogName + " the dog");
    }
  }
}
