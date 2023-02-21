import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from "react-native";
import { COLOR, SHADOWS, SIZE, TEXT } from "../../theme";

const food1 = require("../../assets/image/food1.jpg");
const food2 = require("../../assets/image/food2.jpg");
const food3 = require("../../assets/image/food3.jpg");
const food4 = require("../../assets/image/food4.jpg");
const food5 = require("../../assets/image/food5.jpg");

const carouselItems= [
  {
    id:1,
    image:food1,
    title:"ksadjfhoajkadkd",
  },
  {
    id:2,
    image:food2,
    title:"ksadjfhoajkadkd",
  },
  {
    id:3,
    image:food3,
    title:"ksadjfhoajkadkd",
  },
  {
    id:4,
    image:food4,
    title:"ksadjfhoajkadkd",
  },
  {
    id:5,
    image:food5,
    title:"ksadjfhoajkadkd",
  },
  
];

export const MenuTowRow = () => {

  const _menuList = ({ item, index }:{item:any,index:number}) => {
    return (
      <TouchableOpacity style={{flexDirection:"row",}} activeOpacity={0.8} key={`${index}-cart`}>
        <View style={{
          margin:4,
          width:SIZE.width/7 + 1
        }}>
          <View style={{
            alignItems:"center",
            width:"100%",
            padding:5,
            borderRadius:9,
            ...SHADOWS.sh,
            backgroundColor: COLOR.white,
          }}>
            <Image style={{
              height:35,
              width:35,
            }}
              source={item.image}/>
            
            <Text numberOfLines={2} style={{
              textAlign:"center",
              ...TEXT.fz12,
              ...TEXT.medium,
              width:"100%",
            }}>
              {item.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return(
    <ScrollView 
      horizontal 
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={true}>
      <FlatList
        style={{paddingRight:5}}
        key={carouselItems.length + "cate"}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        numColumns={6}
        keyExtractor={(item) => item.id.toString()}
        data={carouselItems}
        scrollEnabled={false}
        renderItem={_menuList}
      />
    </ScrollView>
  )
}