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
import { Banner } from "../../Component/Banner/Banner";
import { COLOR, SHADOWS, SIZE, TEXT } from "../../theme";
import axios from "axios";
import { HeaderHome } from "../../Component/Header/HeaderHome";
import { DrawerNavigator } from "../Drawer";
import { BannerCarousel } from "../../Component/Carousel/BannerCarousel";
const food1 = require("../../assets/image/food1.jpg");
const food2 = require("../../assets/image/food2.jpg");
const food3 = require("../../assets/image/food3.jpg");
const food4 = require("../../assets/image/food4.jpg");
const food5 = require("../../assets/image/food5.jpg");

import { useSelector, useDispatch } from "react-redux";
import { tong, tru } from "../../store/actions/tong";
import { FetchBannerNotify } from "../../store/actions/banner";
import { MenuTowRow } from "../../Component/Menu/MenuTowRow";

export const Home = () => {
  const ref = React.createRef<any>();
  const [counter,setCounter] = useState(0);
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.tong.giaTri)
  // console.log('value: ', value);
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
      image:food3,
      title:"ksadjfhoajkadkd",
    },
    
  ];

  useEffect(()=>{
    dispatch(FetchBannerNotify())
  },[])


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

  return (
    <SafeAreaView style={{backgroundColor:COLOR.white,flex:1}}>
        <HeaderHome />
        
        {/* Carousel */}
        <BannerCarousel/>
        
        {/* <View style={{width:"100%",flexDirection:"row",justifyContent:"space-around",paddingTop:10}}>
          <TouchableOpacity style={{
            height:40,
            width:40,
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"red",
            }} onPress={() => dispatch(tong(value + 1))}>
            <Text>+</Text>
          </TouchableOpacity>

          <Text style={{borderWidth:0.5,width:80,borderRadius:10,textAlign:"center",textAlignVertical:"center"}}>{value}</Text>
          
          <TouchableOpacity style={{
            height:40,
            width:40,
            borderRadius:10,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"red",
            }}
            onPress={() => dispatch(tru(value - 1))}
            >
            <Text>-</Text>
          </TouchableOpacity>
        </View> */}

        {/* Menu */}
        <View style={{marginTop:10,}}>
          <MenuTowRow/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10,
  },
  dotStyle: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: COLOR.primary80,
    marginHorizontal: -4,
  },
  inactiveDotStyle: {
    backgroundColor: 'white',
    borderWidth:1,
    width: 9,
    height: 9,
    borderColor:COLOR.gray,
  },
})