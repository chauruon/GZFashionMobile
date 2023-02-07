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
import Carousel, { Pagination } from "react-native-snap-carousel"
import { COLOR, SIZE } from "../../theme";
import axios from "axios";
import { HeaderHome } from "../../Component/Header/HeaderHome";
import { DrawerNavigator } from "../Drawer";

const food1 = require("../../assets/image/food1.jpg");
const food2 = require("../../assets/image/food2.jpg");
const food3 = require("../../assets/image/food3.jpg");
const food4 = require("../../assets/image/food4.jpg");
const food5 = require("../../assets/image/food5.jpg");


export const Home = () => {
  const ref = React.createRef<any>();
  const [activeIndex,setActiveIndex] = useState(0);
  const [dataBanner,setDataBanner] = useState([]);

  const carouselItems= [
    {
      id:1,
      image:food1,
    },
    {
      id:2,
      image:food2,
    },
    {
      id:3,
      image:food3,
    },
    {
      id:4,
      image:food4,
    },
    {
      id:5,
      image:food5,
    },
  ];

  useEffect(()=>{
    get();
  },[])
  const get = async () => {
    const data = await axios.get("http://192.168.100.137:8700/api/v1/banner_notify");
    // console.log('data: ', data.data.banner);
    if(data.data){
      setDataBanner(data.data.banner);
    }
  }

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View
        style={{
          height: "100%",
          width:SIZE.width,
          alignItems:"center",
          aspectRatio:3/2,
          justifyContent:"center",
        }}
      >
        <Image style={{width:"100%", height:"100%",resizeMode:'contain'}} source={{ uri: `http://192.168.100.137:8700${item.image}` }} />
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor:COLOR.white,flex:1}}>
      {/* <HeaderHome label="Home"/> */}

      {/* Carousel */}
      <View style={{ height: SIZE.height/4,justifyContent:"center", alignItems:"center"}}>
        <Carousel
          layout={"default"}
          ref={ref}
          autoplay
          data={dataBanner}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          loop
          onSnapToItem = { index => setActiveIndex(index)} />
        <Pagination
          dotsLength={dataBanner.length}
          activeDotIndex={activeIndex}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dotStyle}
          inactiveDotStyle={styles.inactiveDotStyle}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
        />
          
      </View>

      {/* Menu */}
      <View>

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