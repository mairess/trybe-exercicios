class Tv {
    private _brand: string;
    private _size: number;
    private _resolution: string;
    private _connections: string[];
    private _connectedTo?: string;

    constructor(
        brand: string,
        size: number,
        resolution: string, 
        connections: string[],
        ) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }

    turnOn(): void {
        console.log(`TV ${this._brand}, ${this._size}", resolution: ${this._resolution}, \navailable connections: ${this._connections}`);
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }

    set connectedTo(value: string | undefined) {
        if (!value || this._connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        } else {
            console.log('Sorry, connection unavailable!');
        }
    }
}

const myTv = new Tv('aoc', 42, '4k', ['displayPort', 'hdmi', 'usb-c']);

myTv.connectedTo = 'displayPort';
console.log('Connected to:',myTv.connectedTo);