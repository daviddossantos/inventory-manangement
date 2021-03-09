import React from 'react';
import { ListProductProps } from '../../../../types';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Screen from '../../../components/Screen';
import { ProductTitle } from './styled';
import items from '../../../utils/items.json';
import Card from '../../../components/Card';
import { Feather } from '@expo/vector-icons';
import { useCollection } from '@nandorojo/swr-firestore';
import Loading from '../../../components/Loading';

interface Product {
  product_name: string;
  description: string;
  url: string;
  purchase_price: string;
  sale_price: string;
  amount: string;
  selected_amount: number;
  id: string;
}

const ListProduct: React.FC<ListProductProps> = () => {
  const { data } = useCollection('products', { listen: true });

  if (!data) return <Loading />;

  function renderItem({ item }: { item: Product }) {
    return <Card item={item} />;
  }
  return (
    <Screen>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <ProductTitle>Produtos</ProductTitle>
        <Feather.Button
          underlayColor="transparent"
          backgroundColor="transparent"
          name="search"
          size={24}
          color="#8E99AF"
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

export default ListProduct;
