import { Product } from './Product';
import { ProductHistory } from './ProductHistory';

export interface Transaction {
    transactionType: number;
    transactionDate: Date;
    productHistory: ProductHistory[];
}
