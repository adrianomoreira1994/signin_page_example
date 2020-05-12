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

export const ForgotPasswordContainer = styled.View`
  margin-top: -15px;
  align-items: flex-end;
`;
export const ForgotPasswordButton = styled(RectButton)``;

export const ForgotPasswordLabel = styled.Text`
  font-size: 12px;
`;

export const SubmitContainer = styled.View`
  height: 150px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const SubmitSignInContainer = styled(LinearGradient)`
  height: 60px;
  border-radius: 20px;
  align-self: stretch;
  margin-bottom: 20px;
`;

export const SignInButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SignInLabel = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const SubmitSignInFacebookContainer = styled(LinearGradient)`
  height: 60px;
  border-radius: 20px;
  align-self: stretch;
`;

export const SignInButtonFacebook = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SignInFacebookLabel = styled.Text`
  font-size: 14px;
  color: #3b5997;
  margin-left: 8px;
`;

export const NewUserContainer = styled.View`
  height: 100px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
