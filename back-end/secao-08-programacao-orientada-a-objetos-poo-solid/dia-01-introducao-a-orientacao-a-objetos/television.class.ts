class Tv {
    brand: string;
    size: number;
    resolution: string;
    connections: string[];
    connectedTo?: string;

    constructor(
        brand: string,
        size: number,
        resolution: string, 
        connections: string[],
        connectedTo?: string
        ) {
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.connections = connections;
    }

    turnOn() {
        console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution}, \navailable connections: ${this.connections}`);
    }
}

const myTv = new Tv('aoc', 42, '4k', ['displayPort', 'hdmi', 'usb-c']);

myTv.turnOn();