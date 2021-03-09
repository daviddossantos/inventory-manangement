import React from 'react';
import Screen from '../../../components/Screen';
import { Feather } from '@expo/vector-icons';
import { StyledText } from '../../../components/Button/styled';
import { View } from 'react-native';

const Detail: React.FC = ({}) => {
  return (
    <Screen>
      <View style={{ alignItems: 'center' }}>
        <Feather name="alert-triangle" size={24} color="#FF2650" />
        <StyledText style={{ color: '#21293A' }}>
          Em desenvolvimento - Detalhe
        </StyledText>
      </View>
    </Screen>
  );
};

export default Detail;
