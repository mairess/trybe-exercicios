export class OrderItem {
    name: string;
    price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
const açai = new OrderItem('Açai', 12);
const fries = new OrderItem('fries', 20);
const soda = new OrderItem('pepsi', 5.4);
// console.log(newItem.price);