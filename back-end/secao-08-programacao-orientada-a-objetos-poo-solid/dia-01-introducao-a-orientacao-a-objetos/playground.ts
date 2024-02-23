class Person {
    name: string;
    height: number;
    weight?: number; // o caractere "?" indica um atributo opcional
    born?: number;
    constructor(n: string, h: number, w?: number, b?: number) {
      console.log(`Creating person ${n}`);
      this.name = n;
      this.height = h;
      this.weight = w;
      this.born = b;
    }
    sleep() {
      console.log(`${this.name}: zzzzzzz`);
    }
    age() {
        const now = new Date();
        console.log(this.born ? now.getFullYear() - this.born : 'no birth year provide');
    }
  }
  const p1 = new Person('Maria', 171, 58, 1991);
  // aqui estamos passando somente dois parâmetros, atente-se ao valor do atributo p2.weight
  const p2 = new Person('João', 175, undefined, 2000);
  console.log(p1.name, p1.height, p1.weight);
  console.log(p2.name, p2.height, p2.weight);
  p1.sleep();
  p2.sleep();
  p1.age();
  p2.age();
  
  /*
  Saída:
  Creating person Maria
  Creating person João
  Maria 171 58
  João 175 undefined
  Maria: zzzzzzz
  João: zzzzzzz
  */

class Computer {
    cpu: string;
    memory: number;
    storage: number;
    owner: string;
    constructor(c: string, m: number, s: number, o: string) {
        console.log(`creating new computer ${c}`);
        this.cpu = c;
        this.memory = m;
        this.storage = s;
        this.owner = o;
    }
    operationalSystem(){
        return this.cpu === 'core i3' ? 'Ruindows' : 'Linux'; 
    }
    config(){
        return `${this.cpu === 'core i3' ? 'Ruindows' : 'Linux'}, ${this.cpu}, ${this.memory}, ${this.storage}`;
    }
  }
const computerJohn = new Computer("core i5", 8, 250, 'John');
const computerMonalisa = new Computer("core i7", 16, 500, 'Mona');
const computerJessica = new Computer("core i5", 32, 500, 'Jess');
const computerBasic = new Computer("core i3", 6, 250, 'Basic');

const computersArray = [computerJohn, computerMonalisa, computerJessica, computerBasic];


computersArray.forEach((computer) => {
    console.log((`${computer.owner} config: ${computer.config()}`));
});

computersArray.forEach((computer) => {
    console.log((`${computer.owner} os: ${computer.operationalSystem()}`));
});
