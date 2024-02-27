interface MyInterface {
    myNumber: number;
    // myFunc: (value: number) => string;
    myFunc(value: number): string;
}

class MyClass implements MyInterface {
    constructor(public myNumber: number) { }

    myFunc(myParam: number): string {
        const result = this.myNumber + myParam;
        return `The sum to string is: ${result.toString()}`;
    }
}


function main(myObject: MyClass) {
    console.log(myObject.myNumber);
    console.log(myObject.myFunc(25));
}

const xablauCalss = new MyClass(10);

main(xablauCalss)