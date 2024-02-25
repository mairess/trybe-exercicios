class Superclass {
    constructor(public isSuper: boolean = true) { }

    get sayHello() {
        return console.log('Olá mundo!');
    }
}

class Subclass extends Superclass { }

const myFunc = (superclass: Superclass) => {
    return superclass.sayHello;
}
const theSuperclassObject = new Superclass();
const theSubclassObject = new Subclass();

myFunc(theSuperclassObject)
console.log('theSuperclassObject is super:', theSuperclassObject.isSuper);
myFunc(theSubclassObject)
console.log('theSubclassObject is super:', theSubclassObject.isSuper);