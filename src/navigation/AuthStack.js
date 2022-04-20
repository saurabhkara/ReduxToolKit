import React from 'react';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';


export default function AuthStack({Stack}) {
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