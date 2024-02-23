import Joi from 'joi';
import { Client } from './client.class';
import { OrderItem } from './orderItem.class';
import { Order } from './order.class';


const joao = new Client('João');
const açai = new OrderItem('Açai', 12);
const fries = new OrderItem('fries', 20);
const soda = new OrderItem('pepsi', 5.4);
const order = new Order(joao, [açai, fries, soda], 'money', 0.1);
// console.log(order.totalPriceWithDiscount());

const schema = Joi.object({
    day: Joi.number().integer().min(1).max(31).required(),
    month: Joi.string().valid(
        'January',
        'February',
        'March',
        'April',
        'May',
        'June', 
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
        ).required(),
    year: Joi.number().integer().min(1900).max(2100),
})

class MyDate {
    day: number;
    month: string;
    year: number;

    constructor(day: number, month: string, year: number){
        const { error } = schema.validate({day, month, year});
        if (error) {
            throw new Error('01/01/1900');
        };
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getMonthName() {
        return this.month
    }

    isLeapYear() {
        return this.year % 4 === 0 && (this.year % 100 !== 0 || this.year % 400 === 0);
    }

    // compare(date: MyDate) {
    //     const now = new Date();
    //     if (this.day === date.day && this.month === date.month && this.year === date.year) {
    //        return 0;
    //     }
    //     if (data.year > this.year ||  this.day <= date.day && this.month < date.month && )
    // }
    
}
const data = new MyDate(23, 'February', 2024);
// const newDate = new MyDate(23, 'february', 2024);
// console.log(data.compare());




