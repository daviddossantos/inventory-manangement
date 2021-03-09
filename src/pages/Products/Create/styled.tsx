import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding-bottom: 20px;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 30px;
  border: 10px solid #848ca0;
  background-color: #848ca0;
  margin-bottom: 10px;
`;

export const UploadButton = styled.TouchableHighlight`
  top: 10%;
  right: 18%;
  position: absolute;
  background-color: #21293a;
  padding: 10px;
  border-radius: 20px;
`;
export const ButtonSave = styled.TouchableHighlight`
  background-color: #00b2eb;
  padding: 20px;
  border-radius: 15px;
  width: 48%;
  flex-direction: row;
  align-items: center;
`;
export const ButtonAddCart = styled(ButtonSave)`
  background-color: #99e0f7;
  justify-content: center;
`;
