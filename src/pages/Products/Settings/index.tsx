import React from 'react';
import Screen from '../../../components/Screen';
import { StyledText } from '../../../components/Button/styled';
import { ProductTitle } from './styled';
import { SettingsProps } from '../../../../types';
import { FlatList } from 'react-native';
import Card from '../../../components/Card';
import { useRecoilValue } from 'recoil';
import { productsState } from '../../../atoms';

interface Product {
  product_name: string;
  description: string;
  url: string;
  purchase_price: string;
  sale_price: string;
  amount: string;
  selected_amount: number;
}

const Settings: React.FC<SettingsProps> = ({ route, navigation }) => {
  const products = useRecoilValue(productsState);

  function renderItem({ item }: { item: Product }) {
    return <Card item={item} />;
  }

  return (
    <Screen>
      <ProductTitle>Lista de produtos</ProductTitle>
      <StyledText
        style={{ color: '#8E99AF', textAlign: 'left', fontWeight: '400' }}
      >
        {`Adicionado ${products.length}`} produtos
      </StyledText>
      <FlatList
        data={products}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default Settings;
