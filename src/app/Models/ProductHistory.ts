import { Transaction } from './Transaction';

export interface ProductHistory {
    Name:string;
    Quantity: number;
    Price: number;
    Transasaction: Transaction;
}
