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
import { COLOR, SIZE } from "../../theme";

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
  return(
    <View style={styles.container}>
      <Text style={{backgroundColor:COLOR.white}}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:SIZE.width,
    height:60,
    backgroundColor:"red",
  }
})