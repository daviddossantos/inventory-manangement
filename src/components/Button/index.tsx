import React from 'react';
import { StyledButton, StyledText } from './styled';

export default function Button({ children, ...rest }) {
  return (
    <StyledButton {...rest}>
      <StyledText>{children}</StyledText>
    </StyledButton>
  );
}
