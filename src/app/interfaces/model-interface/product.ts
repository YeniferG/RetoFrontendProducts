export interface Product {
  id?: string;
  name: string;
  inventory: number;
  enabled?: boolean;
  min: number;
  max: number;
  imageUrl?: string;
}
