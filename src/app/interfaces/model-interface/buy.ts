import { ProductInfo } from './product-info';
export interface Buy {
    id?: string;
    clientTypeDocument: string;
    clientIdentification: number;
    clientName: string;
    products: ProductInfo[];
  }
