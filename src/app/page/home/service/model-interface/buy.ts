export interface Buy {
    id: string;
    clientTypeDocument: string;
    clientIdentification: number;
    clientName: boolean;
    products: ProductInfo[];
  }

  export interface ProductInfo {
    idProduct: string;
    quantity: number
  }