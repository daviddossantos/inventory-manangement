import { StackScreenProps } from '@react-navigation/stack';

export type ProductsBottomBarParamList = {
  Dashboard: undefined;
  Add: undefined;
  Detail: undefined;
  Create: {
    product_name: string;
    description: string;
    url: string;
    purchase_price: string;
    sale_price: string;
    amount: string;
    selected_amount: number;
    id: string;
  };
  Settings:
    | {
        product_name: string;
        description: string;
        url: string;
        purchase_price: string;
        sale_price: string;
        amount: string;
      }
    | undefined;

  ListProduct:
    | {
        product_name: string;
        description: string;
        url: string;
        purchase_price: string;
        sale_price: string;
        amount: string;
      }
    | undefined;
};

export type ListProductProps = StackScreenProps<
  ProductsBottomBarParamList,
  'ListProduct'
>;
export type DashboardProps = StackScreenProps<
  ProductsBottomBarParamList,
  'Dashboard'
>;
export type CreateProps = StackScreenProps<
  ProductsBottomBarParamList,
  'Create'
>;
export type SettingsProps = StackScreenProps<
  ProductsBottomBarParamList,
  'Settings'
>;
