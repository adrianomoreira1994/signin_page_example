import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';
import ForgotPasswordScreen from './screens/ForgotPassword';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="SignIn">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ title: 'Login' }}
      />

      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: 'Cadastro' }}
      />

      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Esqueci Minha Senha' }}
      />
    </Stack.Navigator>
  );
}
