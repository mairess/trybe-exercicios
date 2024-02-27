class Animal {
    constructor(public name: string, private birthDate: Date) { }

    get age() {
        const timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime())
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25)
    }
}

class Mammal extends Animal {
    walk() {
        console.log(`${this.name} está andando!`);
    }
}

const tiger = new Mammal(
    'Tigre',
    new Date(Date.parse('May 03, 2020')),
)

const main = (animal: Animal) => {
    console.log(animal.age);
}

class Bird extends Animal {
    fly() {
        console.log(`${this.name} is flying!`);
    }
}

const pardal = new Bird(
    'Pardal',
    new Date(Date.parse('Jun 07, 2017'))
)

class Animal2 {
    constructor(protected birthDate: Date) { };
}
class Bird2 extends Animal2 {
    showBirthDate() {
        console.log(this.birthDate);
    }
}

class Animal3 {
    constructor(protected birthDate: Date) { }
}

class Bird3 extends Animal3 {
  constructor(public name: string) { 
    super(new Date())
  }
}

main(tiger);
tiger.walk();
pardal.fly();
main(pardal);