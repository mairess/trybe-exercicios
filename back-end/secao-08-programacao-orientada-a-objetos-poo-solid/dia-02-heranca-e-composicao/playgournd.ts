class Superclass {
    constructor(public isSuper: boolean = true) { }

    public sayHello() {
        return console.log('Olá mundo!');
    }
}

class Subclass extends Superclass { 
    constructor() {
        super()
        this.isSuper = false;
    }
}

const myFunc = (object: Superclass) => {
    object.sayHello();
    console.log(object.isSuper ? 'Super!' : 'Sub!');
}
const theSuperclassObject = new Superclass();
const theSubclassObject = new Subclass();

myFunc(theSuperclassObject)
console.log('theSuperclassObject is super:', theSuperclassObject.isSuper);
myFunc(theSubclassObject)
console.log('theSubclassObject is super:', theSubclassObject.isSuper);