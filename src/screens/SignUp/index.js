import React from 'react';
import Input from '../../components/Input';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  FormInput,
  SubmitContainer,
  SignUpButton,
  SignUpLabel,
  SubmitSignUpContainer,
  NewUserContainer,
  NewUserLabel,
  NewUserButton,
  NewUserButtonLabel,
} from './styles';

export default function SignUp({ navigation }) {
  return (
    <Container>
      <Header>
        <Title>Create Account,</Title>
        <Subtitle>Sign up to get started!</Subtitle>
      </Header>

      <Form>
        <FormInput>
          <Input
            icon="contacts"
            placeholder="Full Name"
            keyboardType="email-address"
          />
        </FormInput>

        <FormInput>
          <Input
            icon="email"
            placeholder="Email ID"
            keyboardType="email-address"
          />
        </FormInput>

        <FormInput>
          <Input icon="lock" placeholder="Password" secureTextEntry />
        </FormInput>
      </Form>

      <SubmitContainer>
        <SubmitSignUpContainer start={[1, 0.2]} colors={['#FCA78D', '#FB578E']}>
          <SignUpButton>
            <SignUpLabel>Login</SignUpLabel>
          </SignUpButton>
        </SubmitSignUpContainer>
      </SubmitContainer>

      <NewUserContainer>
        <NewUserLabel>I'm already a member,</NewUserLabel>
        <NewUserButton onPress={() => navigation.navigate('SignIn')}>
          <NewUserButtonLabel>Sign In</NewUserButtonLabel>
        </NewUserButton>
      </NewUserContainer>
    </Container>
  );
}
