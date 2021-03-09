import React from 'react';
import StyledText from '../StyledText';
import { Container, ProductInformation, PizzaGraphic } from './styled';
import pieEntry from '../../../assets/pie-entry.png';
import pieExit from '../../../assets/pie-exit.png';
import { View } from 'react-native';

export default function Header() {
  const amountProduct = { fontSize: 24, color: 'white' };

  return (
    <Container>
      <View>
        <ProductInformation>
          <PizzaGraphic source={pieEntry} />
          <StyledText style={amountProduct}>3027</StyledText>
          <StyledText style={{ color: '#99CCFB', fontSize: 13 }}>
            Produtos entrada
          </StyledText>
        </ProductInformation>
        <View style={{ marginTop: 10 }}>
          <StyledText style={{ color: '#848CA0' }}>Receita do dia</StyledText>
          <StyledText style={{ color: '#1c2122', fontSize: 24 }}>
            R$ 2544,48
          </StyledText>
        </View>
      </View>
      <View>
        <ProductInformation style={{ backgroundColor: '#00B2EB' }}>
          <PizzaGraphic source={pieExit} />
          <StyledText style={amountProduct}>2546</StyledText>
          <StyledText style={{ color: '#99E0F7', fontSize: 13 }}>
            Produtos saida
          </StyledText>
        </ProductInformation>
        <View style={{ marginTop: 10 }}>
          <StyledText style={{ color: '#848CA0' }}>Receita total</StyledText>
          <StyledText style={{ color: '#21282A', fontSize: 24 }}>
            R$ 2544,48
          </StyledText>
        </View>
      </View>
    </Container>
  );
}

{
  /* <Container>
      <BackgroundText>
        <BoldText>produtos</BoldText>
      </BackgroundText>
      <BoldText style={{ color: '#21293A', marginLeft: 10 }}>venda</BoldText>
    </Container */
}
