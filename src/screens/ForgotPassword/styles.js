import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const paddingTopContainer =
  Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : '0';

export const Container = styled.View`
  background-color: #fbfbfb;
  flex: 1;
  justify-content: center;
  padding-top: ${paddingTopContainer};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.View`
  height: 120px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  color: #d3d3d3;
`;

export const Form = styled.View`
  padding: 10px 0;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#333',
})`
  padding-left: 15px;
  background-color: transparent;
  height: 60px;
  border-radius: 20px;
  border: 2px solid #d3d3d3;
`;

export const SubmitContainer = styled.View`
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const SubmitForgotPasswordContainer = styled(LinearGradient)`
  height: 60px;
  border-radius: 20px;
  align-self: stretch;
`;

export const ForgotPasswordButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ForgotPasswordLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const BackContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;
export const BackLabel = styled.Text`
  font-size: 14px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const BackButtonLabel = styled.Text`
  color: #fb578e;
  font-weight: bold;
  font-size: 14px;
`;
