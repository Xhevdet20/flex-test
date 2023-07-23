import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Products from '../screens/Products';
interface Props {}

const Stack = createNativeStackNavigator();

const NavContainer: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name='Forgot Password' component={ForgotPassword} options={{ headerShown: false }} />
        <Stack.Screen name='Products' component={Products} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
