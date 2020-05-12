import React from 'react';
import Input from '../../components/Input';

import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  SubmitContainer,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  SubmitForgotPasswordContainer,
  BackContainer,
  BackButton,
  BackButtonLabel,
} from './styles';

export default function ForgotPassword({ navigation }) {
  return (
    <Container>
      <Header>
        <Title>Did you,</Title>
        <Subtitle>forgot your password?</Subtitle>
      </Header>

      <Form>
        <Input
          icon="email"
          placeholder="Enter your e-mail..."
          keyboardType="email-address"
        />
      </Form>

      <SubmitContainer>
        <SubmitForgotPasswordContainer
          start={[1, 0.2]}
          colors={['#FCA78D', '#FB578E']}
        >
          <ForgotPasswordButton>
            <ForgotPasswordLabel>Send</ForgotPasswordLabel>
          </ForgotPasswordButton>
        </SubmitForgotPasswordContainer>
      </SubmitContainer>

      <BackContainer>
        <BackButton onPress={() => navigation.navigate('SignIn')}>
          <BackButtonLabel>Back</BackButtonLabel>
        </BackButton>
      </BackContainer>
    </Container>
  );
}
