import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDocument } from '@nandorojo/swr-firestore';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import {
  ImagePickerOptions,
  launchImageLibraryAsync,
  MediaTypeOptions,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  Text,
  View,
  Keyboard,
} from 'react-native';
import { useRecoilState } from 'recoil';
import { CreateProps } from '../../../../types';
import { productsState } from '../../../atoms';
import Input from '../../../components/Input';
import Loading from '../../../components/Loading';
import Screen from '../../../components/Screen';
import StyledText from '../../../components/StyledText';
import { fuego } from '../../../config/Fuego';
import {
  ProductImage,
  UploadButton,
  ButtonSave,
  ButtonAddCart,
} from './styled';

interface FormData {
  product_name: string;
  description: string;
  url: string;
  purchase_price: string;
  sale_price: string;
  amount: string;
}

const Create: React.FC<CreateProps> = ({ route, navigation }) => {
  const { data, update } = useDocument<FormData>(`products/${route.params.id}`);
  const [products, setProducts] = useRecoilState(productsState);
  const [image, setImage] = useState<String>('');
  const [loading, setLoading] = useState<Boolean>(false);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    if (data) {
      setImage(data.url);
      formRef.current.setData(data);
    }
  }, [data]);

  useEffect(() => {
    async function requestPermission() {
      if (Platform.OS !== 'web') {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    }
    requestPermission();
  }, []);

  async function pickImage() {
    let result = await launchImageLibraryAsync<ImagePickerOptions>({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) setImage(result.uri);
  }

  async function handleSubmit(data: FormData) {
    Keyboard.dismiss();
    setLoading(true);
    data.url = await uploadImageAsync();
    await update(data);
    setLoading(false);
    navigation.navigate('ListProduct');
  }

  async function uploadImageAsync() {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });

    const ref = fuego.storage().ref().child('uuid()');
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    return await snapshot.ref.getDownloadURL();
  }

  function navigateToCart() {
    if (loading) return;

    const product = formRef.current?.getData();
    const selectProduct = products.find(
      item => item.product_name == product.product_name,
    );
    if (selectProduct) {
      //caso o produto tenha sido seleciona, incrementar qtd
    } else {
      setProducts(oldProducts => [...oldProducts, product]);
      navigation.navigate('Settings');
    }
  }

  if (!data) return <Loading />;

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
              uri: image,
            }}
          />
          <UploadButton onPress={pickImage} underlayColor="#21293A">
            <Feather name="camera" size={24} color="#fff" />
          </UploadButton>
        </View>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            editable={!loading}
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
            editable={!loading}
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
            editable={!loading}
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
            editable={!loading}
            name="sale_price"
            keyboardType="numeric"
            placeholder="Ex:10"
            onSubmitEditing={() => formRef.current.submitForm()}
            returnKeyType="done"
          />
        </Form>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginTop: 20,
          }}
        >
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <ButtonSave underlayColor="#3cabcf" onPress={navigateToCart}>
              <>
                <Feather name="shopping-bag" size={25} color={'#fff'} />
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: '700',
                    marginLeft: 10,
                  }}
                >
                  Adicionar ao carrinho
                </Text>
              </>
            </ButtonSave>
            <ButtonAddCart
              underlayColor="#99E0F7"
              onPress={() => formRef.current?.submitForm()}
            >
              {loading ? (
                <ActivityIndicator color="#fff" size="small" />
              ) : (
                <>
                  <Feather name="shopping-bag" size={25} color={'#fff'} />
                  <Text
                    style={{
                      color: '#fff',
                      fontWeight: '700',
                      marginLeft: 10,
                    }}
                  >
                    Salvar
                  </Text>
                </>
              )}
            </ButtonAddCart>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default Create;
