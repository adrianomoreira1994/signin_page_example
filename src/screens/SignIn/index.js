import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  FormInput,
  Input,
  ForgotPasswordContainer,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  SubmitContainer,
  SignInButton,
  SignInLabel,
  SignInButtonFacebook,
  SignInFacebookLabel,
  SubmitSignInContainer,
  SubmitSignInFacebookContainer,
  NewUserContainer,
  NewUserLabel,
  NewUserButton,
  NewUserButtonLabel,
} from './styles';

export default function SignIn({ navigation }) {
  return (
    <Container>
      <Header>
        <Title>Welcome,</Title>
        <Subtitle>Sign in to continue!</Subtitle>
      </Header>

      <Form>
        <FormInput>
          <Input placeholder="Email ID" keyboardType="email-address" />
        </FormInput>

        <FormInput>
          <Input placeholder="Password" secureTextEntry />
        </FormInput>
      </Form>

      <ForgotPasswordContainer>
        <ForgotPasswordButton
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <ForgotPasswordLabel>Forgot Password?</ForgotPasswordLabel>
        </ForgotPasswordButton>
      </ForgotPasswordContainer>

      <SubmitContainer>
        <SubmitSignInContainer start={[1, 0.2]} colors={['#FCA78D', '#FB578E']}>
          <SignInButton>
            <SignInLabel>Login</SignInLabel>
          </SignInButton>
        </SubmitSignInContainer>

        <SubmitSignInFacebookContainer
          start={[1, 0.2]}
          colors={['#EBECF2', '#EAEEF4']}
        >
          <SignInButtonFacebook>
            <AntDesign name="facebook-square" size={20} color="#3b5997" />
            <SignInFacebookLabel>Connect with Facebook</SignInFacebookLabel>
          </SignInButtonFacebook>
        </SubmitSignInFacebookContainer>
      </SubmitContainer>

      <NewUserContainer>
        <NewUserLabel>I'm a new user,</NewUserLabel>
        <NewUserButton onPress={() => navigation.navigate('SignUp')}>
          <NewUserButtonLabel>Sign Up</NewUserButtonLabel>
        </NewUserButton>
      </NewUserContainer>
    </Container>
  );
}
