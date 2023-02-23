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
import {COLOR, SHADOWS, SIZE, TEXT } from "../../theme"
import axios from "axios";
import { HeaderHome } from "../../Component/Header/HeaderHome";
import { DrawerNavigator } from "../Drawer";
import { BannerCarousel } from "../../Component/Carousel/BannerCarousel";
import { useDispatch, useSelector } from "react-redux";
import { tong, tru } from "../../store/actions/tong";
import { FetchBannerNotify } from "../../store/actions/banner";
import { MenuTowRow } from "../../Component/Menu/MenuTowRow";
import { HightLight, ImageArr } from "../../Component/CateHightLight/HightLight ";
import { Propose } from "../../Component/Propose/Propose";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SwipeableList } from "../../Component/Swipeable/SwipeableList";
import { Swipe } from "../../Component/Swipeable/Swipe";

export const Home = () => {
  const ref = React.createRef<any>();
  const dispatch = useDispatch();

  const [counter,setCounter] = useState(0);

  const value = useSelector((state: any) => state.tong.giaTri)




 


  return (
    <SafeAreaView style={{backgroundColor:COLOR.white,flex:1}}>
      <HeaderHome />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carousel */}
        {/* <BannerCarousel/> */}

        {/* Menu */}
        {/* <View style={{marginTop:10,}}>
          <MenuTowRow/>
        </View> */}

        {/* Body */}
        {/* <View style={{marginTop:10,marginLeft:5}}>
          <Text style={styles.featuredProducts}>Nổi bật</Text>
          <HightLight/>
          <Text style={[styles.featuredProducts,{marginTop:10,}]}>Đề xuất</Text>
          <Propose/>
        </View> */}

        


        <Swipe/>






      </ScrollView>
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

  featuredProducts:{
    ...TEXT.bold,
    ...TEXT.h2,
  },
})