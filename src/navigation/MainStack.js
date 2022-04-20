import { View, Text } from 'react-native'
import React from 'react';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

export default function MainStack({Stack}) {
  return (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: "Shopping Cart",
            headerStyle: {
              backgroundColor: "pink",
            },
          }}
        />
      </Stack.Navigator>
  )
}