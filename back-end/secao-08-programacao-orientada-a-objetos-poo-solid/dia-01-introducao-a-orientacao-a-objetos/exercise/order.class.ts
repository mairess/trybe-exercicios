import { Client } from './client.class';
import { OrderItem } from './orderItem.class';

export class Order {
    client: Client;
    items: OrderItem[];
    payment: string;
    discount?: number;

    constructor(client: Client, items: OrderItem[], payment: string, discount: number) {
        this.client = client;
        this.items = items;
        this.payment = payment;
        this.discount = discount;
    }

    totalPrice() {
        return this.items.reduce((acc, current) => acc + current.price, 0)
    }

    totalPriceWithDiscount() {
        const originalPrice = this.totalPrice();
        const discount = originalPrice * (this.discount ?? 0);
        return originalPrice - discount
    }
}