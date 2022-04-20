import React, {useState,useEffect} from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";



const Stack = createNativeStackNavigator();

function RootNavigation() {

  const [user, setUSer]=useState(true);

  useEffect(()=>{

  })
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {
        user ? <MainStack Stack={Stack} /> :
        <AuthStack Stack={Stack} />
      }

    </NavigationContainer>
  );
}

export default RootNavigation;
