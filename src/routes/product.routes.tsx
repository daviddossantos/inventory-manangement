import React from 'react';
import ListProduct from '../pages/Products/ListProduct';
import Create from '../pages/Products/Create';
import { createStackNavigator } from '@react-navigation/stack';

function ProductStackScreen() {
  const ProductStackScreen = createStackNavigator();

  return (
    <ProductStackScreen.Navigator
      initialRouteName="ListProduct"
      headerMode="none"
    >
      <ProductStackScreen.Screen name="Create" component={Create} />
      <ProductStackScreen.Screen name="ListProduct" component={ListProduct} />
    </ProductStackScreen.Navigator>
  );
}

export default ProductStackScreen;
