interface Logger {
    log(myParam: string): void;
}

class ConsoleLogger implements Logger {
    log(myParam: string): void {
        console.log('ConsoleLogger from:', myParam);
    }
}

class ConsoleLogger2 implements Logger {
    log(myParam: string): void {
        console.log('ConsoleLogger from:',myParam);
    }
}

interface Database {
    logger: Logger;
    save(key: string, value: string): void
}

class ExampleDatabase implements Database {
    constructor(public logger: Logger = new ConsoleLogger()) {  }

    save(key: string, value: string): void {
        this.logger.log(`Salvando o valor ${value} na chave ${key}`)
    }
}
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const exampleDatabase1 = new ExampleDatabase(logger1);
const exampleDatabase2 = new ExampleDatabase(logger2);
const exampleDatabase3 = new ExampleDatabase();

exampleDatabase1.save('value 1', 'value 2')
exampleDatabase2.save('value 1', 'value 2')
exampleDatabase3.save('value 1', 'value 2')