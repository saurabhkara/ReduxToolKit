import { View, Text } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

export default function MainStack() {
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