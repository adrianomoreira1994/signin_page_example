import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import SignInScreen from './screens/SignIn';
import SignUpScreen from './screens/SignUp';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator headerMode="none">
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
    </Stack.Navigator>
  );
}
