import React from 'react';
import { Text } from './styled';

export default function StyledText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
}
