import React from 'react';
import StyledText from '../StyledText';
import { Text, View } from 'react-native';
import { ProductImage, Container } from './styled';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

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

export default function Card({ item }: { item: Product }) {
  const navigation = useNavigation();
  const route = useRoute();

  function addProduct() {
    navigation.navigate('Create', item);
  }

  return (
    <Container>
      <ProductImage
        source={{
          uri: item.url,
        }}
      />
      <View>
        <StyledText
          style={{
            color: '#8E99AF',
            fontWeight: 'bold',
            fontSize: 13,
          }}
        >
          {item.product_name}
        </StyledText>
        <StyledText style={{ fontSize: 16, color: '#21293A' }}>
          R$ {item.sale_price}
        </StyledText>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        {route.name == 'Settings' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
            }}
          >
            <AntDesign name="closecircle" size={25} color="#FF2650" />
            {/* <AntDesign name="minuscircle" size={25} color="#FF2650" /> */}

            <View
              style={{
                borderRadius: 20,
                backgroundColor: '#D0D0D2',
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
              }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontWeight: '400',
                  fontSize: 12,
                }}
              >
                {item.selected_amount}
              </Text>
            </View>

            <AntDesign name="pluscircle" size={25} color="#34C47C" />
          </View>
        ) : (
          <MaterialIcons.Button
            onPress={addProduct}
            name="keyboard-arrow-right"
            size={24}
            color="#21293A"
            backgroundColor="white"
            underlayColor="transparent"
          />
        )}
      </View>
    </Container>
  );
}
