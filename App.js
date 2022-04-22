import 'react-native-gesture-handler'
import { useState, useEffect, useMemo} from 'react';
import { ActivityIndicator,View} from 'react-native';
import { Provider } from 'react-redux';
import RootNavigation from './src/navigation';
import { store } from './src/store';



export default function App() {


  return (
    <Provider store={store}>
      {/* <StatusBar translucent = {true} hidden = {false}/> */}
    <RootNavigation />
    </Provider>
  );
}

