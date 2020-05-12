import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const paddingTopContainer =
  Platform.OS === 'android' ? `${StatusBar.currentHeight}px` : '0';

export const Container = styled.ScrollView`
  background-color: #fbfbfb;
  flex: 1;
  padding-top: ${paddingTopContainer};
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.View`
  height: 200px;
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
export const FormInput = styled.View`
  margin-bottom: 15px;
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
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const SubmitSignUpContainer = styled(LinearGradient)`
  height: 60px;
  border-radius: 20px;
  align-self: stretch;
`;

export const SignUpButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SignUpLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const NewUserContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`;
export const NewUserLabel = styled.Text`
  font-size: 14px;
`;

export const NewUserButton = styled.TouchableOpacity`
  margin-left: 5px;
`;

export const NewUserButtonLabel = styled.Text`
  color: #fb578e;
  font-weight: bold;
  font-size: 14px;
`;
