interface Person {
    name: string;
    info: string;
}

class Student implements Person {
    constructor(
        public name: string,
        public school: string,
    ) { };

    get info() {
        return `${this.name} studies at school ${this.school}`
    }
}


class Professor implements Person {
    constructor(
        public name: string,
        public school: string,
        public subject: string
    ) { };

    get info() {
        return `${this.name} teaches ${this.subject} at school ${this.school}`
    }
}

function printInfo(person: Person) {
    console.log(person.info);
}

const Xavier = new Professor('Xavier', 'Mutants', 'super power management');
const Scott = new Student('Scott', 'Mutants');

printInfo(Xavier);
printInfo(Scott);
