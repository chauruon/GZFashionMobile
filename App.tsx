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
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="TabNavigation" component={TabNavigation} options={screenOptions}/>
      </Stack.Navigator> */}
      <DrawerNavigator/>

    </NavigationContainer>
  );
}

export default App;
