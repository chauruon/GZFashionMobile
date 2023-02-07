import { createDrawerNavigator } from '@react-navigation/drawer';
import { Article } from './Feed/Article';
import { Feed } from './Feed/Feed';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './TabNavigation';

const Drawer = createDrawerNavigator();

export const DrawerNavigator =() => {
  return(
      <Drawer.Navigator>
        <Drawer.Screen name="TabNavigation" component={TabNavigation} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
  )
}