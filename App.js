import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import Header from './src/components/Header';
import RootNavigation from './src/navigation';
import Home from './src/screens/Home';
import { store } from './src/store';


export default function App() {
  return (
    <Provider store={store}>
      {/* <StatusBar translucent = {true} hidden = {false}/> */}
    <RootNavigation />
    </Provider>
  );
}

