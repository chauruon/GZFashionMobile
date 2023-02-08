import React from 'react';
import {StyleSheet,Text, View, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './HomeScreen/Home';
import { Settings } from './SettingsScreen/Settings';

import { COLOR,SIZE,TEXT } from '../theme';

import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { DrawerNavigator } from './Drawer';

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

  interface TabBarProps {
    state: TabNavigationState<ParamListBase>;
    descriptors: BottomTabDescriptorMap;
    navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
  }

  const CustomHeaderTab = ({ state, descriptors, navigation }: TabBarProps) => {
    return (
      <View style={styles.bottom}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          
          const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;


          let iconName;
          const isFocused = state.index === index;
          if (route.name === "Home") {
            iconName = require("../assets/icons/iconHome.png")
          } else if (route.name === "Settings") {
            iconName = require("../assets/icons/iconSettings.png")
          }

          const onPress = () => {
            if (!isFocused) {
              // userInfo !== null ? 
                navigation.navigate(route.name)
              // :
                // navigation.navigate("Login");
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };
          return (
            <TouchableOpacity
              key={index}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.itemBottom,]}
            >
              <Image source={iconName} style={styles.iconBottom}/>
              <Text style={[styles.labelBottom,isFocused ? {color:COLOR.secondary,}:{color:COLOR.primary24,}]}>
                {`${label}`}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <Tab.Navigator tabBar={(props) => <CustomHeaderTab {...props} />} screenOptions={screenOptions} >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Settings" component={Settings} options={screenOptions}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottom:{
    flexDirection: "row",
    height: SIZE.height_btnBottom,
    backgroundColor: COLOR.gray16,
    borderTopLeftRadius: SIZE.spacing,
    borderTopRightRadius:SIZE.spacing,
  },
  itemBottom:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBottom:{
    width: SIZE.iconBar,
    height: SIZE.iconBar,
    top: 2,
  },
  labelBottom:{
    ...TEXT.medium,
    ...TEXT.fz10,
  },
});