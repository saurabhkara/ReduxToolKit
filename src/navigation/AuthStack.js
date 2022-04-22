import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    
    <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
  )
}