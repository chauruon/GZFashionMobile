import React from 'react';
import {StyleSheet,Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './HomeScreen/Home';
import { Settings } from './SettingsScreen/Settings';

const Tab = createBottomTabNavigator();

export const TabNavigation =() => {
  const screenOptions = {
    headerTransparent: true,
    headerShown: false,
  };
  
  const stackOption = {
    headerShown: true,
    headerBackTitle: "",
    headerTitle: "",
  };
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={Home} options={screenOptions}/>
      <Tab.Screen name="Settings" component={Settings} options={screenOptions}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
   
});