import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
interface Props {}

const Stack = createNativeStackNavigator();

const NavContainer: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name='Forgot Password' component={ForgotPassword} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavContainer;
