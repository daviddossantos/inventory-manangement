import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Form } from '@unform/mobile';
import React, { useRef } from 'react';
import { ScrollView, View } from 'react-native';
import { CreateProps } from '../../../../types';
import Input from '../../../components/Input';
import Screen from '../../../components/Screen';
import StyledText from '../../../components/StyledText';
import { ProductImage, UploadButton } from './styled';
import { FormHandles } from '@unform/core';
import { useCollection } from '@nandorojo/swr-firestore';

interface FormData {
  product_name: string;
  description: string;
  url: string;
  purchase_price: string;
  sale_price: string;
  amount: string;
}

const Add: React.FC<CreateProps> = ({ route, navigation }) => {
  const { add } = useCollection('products');
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FormData) {
    add(data);
    formRef.current?.reset();
    navigation.navigate('ListProduct');
  }

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <ProductImage
            source={{
              uri: route.params?.url,
            }}
          />
          <UploadButton onPress={() => {}} style={{}} underlayColor="#21293A">
            <Feather name="camera" size={24} color="#fff" />
          </UploadButton>
        </View>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="product_name"
            style={{ fontSize: 30, textAlign: 'center', fontWeight: '700' }}
            placeholder="Ex: Refrigerante"
            maxLength={15}
            onSubmitEditing={() =>
              formRef.current.getFieldRef('amount').focus()
            }
            returnKeyType="next"
          />
          <StyledText>Quantidade</StyledText>
          <Input
            name="amount"
            keyboardType="numeric"
            placeholder="Ex:10"
            onSubmitEditing={() =>
              formRef.current.getFieldRef('purchase_price').focus()
            }
            returnKeyType="next"
          />
          <StyledText>Preço de compra</StyledText>
          <Input
            name="purchase_price"
            keyboardType="numeric"
            placeholder="Ex:10"
            onSubmitEditing={() =>
              formRef.current.getFieldRef('sale_price').focus()
            }
            returnKeyType="next"
          />
          <StyledText>Preço de venda</StyledText>
          <Input
            name="sale_price"
            keyboardType="numeric"
            placeholder="Ex:10"
            onSubmitEditing={() => formRef.current.submitForm()}
            returnKeyType="done"
          />
        </Form>
      </ScrollView>
    </Screen>
  );
};

export default Add;
