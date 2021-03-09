import { atom } from 'recoil';

interface Product {
  product_name: string;
  description: string;
  url: string;
  purchase_price: string;
  sale_price: string;
  amount: string;
  selected_amount: number;
}

export const productsState = atom({
  key: 'productsState',
  default: [],
});
export const productState = atom({
  key: 'productState',
  default: {} as Product,
});
