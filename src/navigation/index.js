import React, {useState,useEffect, useMemo,} from "react";
import { View, ActivityIndicator } from  'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";
import { useSelector , useDispatch} from 'react-redux';
import { setIsLoading } from "../store/AuthSlice";





// const Drawer = createDrawerNavigator();

function RootNavigation() {

  const dispatch=useDispatch();
  const {isLoading, userToken} = useSelector(state => state.auth);

  useEffect(()=>{
    setTimeout(()=>{
      dispatch(setIsLoading(false))
    },1000)
  },[])

  
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: "#FFF",
    },
  };

  if(isLoading){
    return(
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
       <ActivityIndicator size='large' color='pink'/>
      </View>
     
    ) 
  }


  return (
    <NavigationContainer theme={MyTheme}>
   
         {userToken  ? <MainStack /> 
         :
        //  <Drawer.Navigator initialRouteName="AuthStack">
          //  <Drawer.Screen name="AuthStack" component={AuthStack} />
           <AuthStack  /> 
          // </Drawer.Navigator>
        }
       
   
    </NavigationContainer>
  );
}

export default RootNavigation;
