import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerNavigationState, NavigationContainer, ParamListBase } from '@react-navigation/native';
import { TabNavigation } from './TabNavigation';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Switch,
} from 'react-native';
import { COLOR, TEXT } from '../theme';
import DeviceInfo from 'react-native-device-info';
import { useNavigation } from '@react-navigation/native';
import { ShoppingCart } from './ShoppingCartScreen/ShoppingCart';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import { NameDrawerTab } from "../Utils/Common";
import { Favourite } from './FavouriteScreen/Favourite';
import { SatusPurchaseOrder } from './SatusOrderScreen/SatusPurchaseOrder';


const Drawer = createDrawerNavigator();

const avatar = require("../assets/image/4.jpg");
const iconShoppingBag = require("../assets/icons/iconShoppingBag.png");
const iconSetting = require("../assets/icons/iconSettings.png");
const iconHome = require("../assets/icons/iconHomeTab.png");
const iconHeart = require("../assets/icons/iconHeart.png");
const iconPurchaseOrder = require("../assets/icons/iconPurchaseOrder.png");
const iconMoreThan = require("../assets/icons/iconMoreThan.png");


type Props = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};


export const DrawerNavigator =() => {
  const navigation = useNavigation();
  const versionApp = DeviceInfo.getVersion();

  const screenOptions = {
    headerTransparent: true,
    headerShown: false,
  };

  const CustomDrawerContent = ({state,
    navigation,
    descriptors,}:Props) => {
      return (
      <>
        <View style={styles.containerAvartar}>
          <Image style={styles.avatar} source={avatar}/>
          <Text style={styles.username}>HAHAHAH</Text>
        </View>
        <ScrollView>
          {state.routes.map((route:any,index:number) =>{
           const { options } = descriptors[route.key];
            const focused = index === state.index;

            
            const label = options.drawerLabel !== undefined
            ? options.drawerLabel
            : options.title !== undefined
            ? options.title
            : route.name
            
            let iconName;
            if (route.name === "TabNavigation") {
              iconName = iconHome;
            } else if (route.name === "ShoppingCart") {
              iconName = iconShoppingBag;
            }else if (route.name === "SatusPurchaseOrder") {
              iconName = iconPurchaseOrder;
            }else if (route.name === "Favourite") {
              iconName = iconHeart;
            }

            const onPress = () => {
              if (!focused) {
                navigation.navigate(route.name)
              }
            };

            return(
              <TouchableOpacity key={label} onPress={onPress} style={styles.button}>
                <View style={{flexDirection:"row"}}>
                  <Image style={styles.icon} source={iconName}/>
                  <Text style={styles.label}>{NameDrawerTab(label)}</Text>
                </View>
                <Image style={styles.iconGreater} source={iconMoreThan}/>
              </TouchableOpacity>
            )
          })}

              {/* <View style={{flex:1,backgroundColor:COLOR.white,}}>
                <View style={styles.drawerItem}>
                  <TouchableOpacity onPress={onPress} style={styles.button}>
                    <View style={{flexDirection:"row"}}>
                      <Image style={styles.icon} source={iconShoppingBag}/>
                      <Text style={styles.label}>Giỏ hàng</Text>
                    </View>
                    <Image style={styles.iconGreater} source={iconMoreThan}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <View style={{flexDirection:"row"}}>
                      <Image style={styles.icon} source={iconHeart}/>
                      <Text style={styles.label}>Yêu thích</Text>
                    </View>
                    <Image style={styles.iconGreater} source={iconMoreThan}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button}>
                    <View style={{flexDirection:"row"}}>
                      <Image style={styles.icon} source={iconPurchaseOrder}/>
                      <Text style={styles.label}>Trạng thái đơn hàng</Text>
                    </View>
                    <Image style={styles.iconGreater} source={iconMoreThan}/>
                  </TouchableOpacity>

                  <View style={styles.dashed}>
                    <Text style={styles.label}>Cài đặt</Text>
                  </View>
                  <TouchableOpacity style={styles.button}>
                    <View style={{flexDirection:"row"}}>
                      <Image style={styles.icon} source={iconSetting}/>
                      <Text style={styles.label}>Cài đặt</Text>
                    </View>
                    <Image style={styles.iconGreater} source={iconMoreThan}/>
                  </TouchableOpacity>
                </View>
              </View> */}



            <View style={styles.version}>
              <Text>{`Phiên bản: ${versionApp}`}</Text>
            </View>
        </ScrollView>
      </>
    );
  }

  return(
    <Drawer.Navigator  drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={screenOptions}>
      <Drawer.Screen name="TabNavigation" component={TabNavigation} />
      <Drawer.Screen name="ShoppingCart" component={ShoppingCart} />
      <Drawer.Screen name="SatusPurchaseOrder" component={SatusPurchaseOrder} />
      <Drawer.Screen name="Favourite" component={Favourite} />
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
    alignItems:"flex-start",
  },
  button:{
    flexDirection:"row",
    width:"100%",
    paddingVertical:9,
    justifyContent:"space-between",
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
  iconGreater:{
    height:15,
    width:15,
    marginRight:10,
  },
  version:{
    alignItems:"center",
    width:"100%",
  },
  dashed:{
    width: "100%",
    marginVertical:10,
  }
});