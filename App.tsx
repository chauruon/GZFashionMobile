/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigation } from './src/Screen/TabNavigation';
import { DrawerNavigator } from './src/Screen/Drawer';
import {Provider} from 'react-redux';
import store from './src/store/store';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerTransparent: true,
  headerShown: false,
};

const stackOption = {
  headerShown: true,
  headerBackTitle: "",
  headerTitle: "",
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator/>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
