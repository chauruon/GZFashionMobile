import React,{useState} from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  TextInput,
} from "react-native";
import { COLOR, SIZE, TEXT } from "../../theme";
import { useNavigation } from '@react-navigation/native';

const iconMenu = require("../../assets/icons/iconMenu.png");
const iconShoppingBag = require("../../assets/icons/iconShoppingBag.png");


interface HearderProps {
  iconRight?: ImageSourcePropType,
  iconLeft?: ImageSourcePropType,
  label?: string,
}

export const HeaderHome = ({
  iconRight,
  iconLeft,
  label,
}: HearderProps) => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=> navigation.openDrawer()}>
        <Image style={{height:"50%",width:"50%",}} source={iconMenu}/>
      </TouchableOpacity>
      <View style={styles.label}>
        <Text style={styles.textLabel}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={()=> {console.log("000000000000000000000000")}}>
        <Image style={{height:"50%",width:"50%",zIndex:0}} source={iconShoppingBag}/>
        <View style={styles.numberBag}>
          <Text style={styles.numberToBag}>10+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:SIZE.width,
    height:35,
    flexDirection:"row",
    paddingHorizontal:10,
  },
  numberBag:{
    width:"100%",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    zIndex:100,
    paddingBottom:20,
    paddingLeft:17,
    position:"absolute",
  },
  numberToBag:{
    backgroundColor:"red",
    borderRadius:11,
    fontSize:10,
    ...TEXT.bold,

    textAlign:"center",
    alignSelf:"center"
  },
  label:{
    backgroundColor:COLOR.white,
    width:"80%",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  },
  textLabel:{
    ...TEXT.h2,
    ...TEXT.bold,
  },
  button:{
    width:40,
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
  }
})