import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { Article } from './Feed/Article';
import { Feed } from './Feed/Feed';
import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from './TabNavigation';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
} from 'react-native';
import { COLOR, TEXT } from '../theme';

const Drawer = createDrawerNavigator();

const avatar = require("../assets/image/4.jpg");
const iconShoppingBag = require("../assets/icons/iconShoppingBag.png");
const iconSetting = require("../assets/icons/iconSettings.png");
const iconHeart = require("../assets/icons/iconHeart.png");


export const DrawerNavigator =() => {
  
  const screenOptions = {
    headerTransparent: true,
    headerShown: false,
  };

  const CustomDrawerContent = ({props}:any) => {
    return (
      <DrawerContentScrollView {...props}>
        <View style={{flex:1,backgroundColor:COLOR.white,}}>
          <View style={styles.containerAvartar}>
            <Image style={styles.avatar} source={avatar}/>
            <Text style={styles.username}>HAHAHAH</Text>
          </View>
          <View style={styles.drawerItem}>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.icon} source={iconShoppingBag}/>
              <Text style={styles.label}>Giỏ hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.icon} source={iconHeart}/>
              <Text style={styles.label}>Yêu thích</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image style={styles.icon} source={iconSetting}/>
              <Text style={styles.label}>Cài đặt</Text>
            </TouchableOpacity>
          </View>
        </View>
    </DrawerContentScrollView>
    );
  }

  return(
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={screenOptions}>
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({
  containerAvartar:{
    marginTop:-5,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#512DA8",
    borderBottomRightRadius:50,
    borderBottomLeftRadius:50,
    height:150,
  },
  avatar:{
    height:80,
    width:80,
    borderRadius:50,
  },
  username:{
    ...TEXT.bold,
    ...TEXT.h3,
    marginTop:5,
  },
  drawerItem:{
    paddingHorizontal:10,
    padding:5,
    // backgroundColor:"red",
    justifyContent:"center",
    alignItems:"flex-start"
  },
  button:{
    flexDirection:"row",
    width:"100%",
    paddingVertical:9,
    // backgroundColor:"#7BDCB5",
  },
  label:{
    ...TEXT.fz14,
    ...TEXT.medium,
    marginLeft:5
  },
  icon:{
    height:20,
    width:20,
  },
});