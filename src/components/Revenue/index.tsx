import StyledText from '../StyledText';
import React from 'react';
import { View } from 'react-native';
import { DateContainer, TextWeek, FilterContainer } from './styled';

export default function Revenue() {
  const values = ['1D', '1S', '1M', '3M', '6M', '1A'];
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* <DateContainer>
        {values.map(value => (
          <FilterContainer onStartShouldSetResponder={() => {}}>
            <TextWeek>{value}</TextWeek>
          </FilterContainer>
        ))}
      </DateContainer> */}

      <View>
        <StyledText style={{ color: '#848CA0' }}>Receita total</StyledText>
        <StyledText style={{ color: '#21282A', fontSize: 24 }}>
          R$ 2544,48
        </StyledText>
      </View>
      <View>
        <StyledText style={{ color: '#848CA0' }}>Receita hoje</StyledText>
        <StyledText style={{ color: '#21282A', fontSize: 24 }}>
          R$ 2544,48
        </StyledText>
      </View>
    </View>
  );
}
