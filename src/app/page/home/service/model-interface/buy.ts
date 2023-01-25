import { ProductInfo } from '../model-interface/product-info';
export interface Buy {
    id: string;
    clientTypeDocument: string;
    clientIdentification: number;
    clientName: boolean;
    products: ProductInfo[];
  }
