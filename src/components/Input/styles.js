import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;
  padding: 0 15px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.3)',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #333;
`;
