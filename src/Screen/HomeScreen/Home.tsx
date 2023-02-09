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
import { COLOR, SHADOWS, SIZE, TEXT } from "../../theme";
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
    {
      id:6,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:7,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:8,
      image:food5,
      title:"ksadjfhoajkadkd",
    },
    {
      id:9,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:10,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:11,
      image:food5,
      title:"ksadjfhoajkadkd",
    },
    {
      id:12,
      image:food1,
      title:"ksadjfhoajkadkd",
    },
    {
      id:13,
      image:food1,
      title:"ksadjfhoajkadkd",
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
        {dataBanner.length === 0 ?
          <Image style={{width:"100%", height:"100%",resizeMode:'contain'}} source={item.image} />
          :
          <Image style={{width:"100%", height:"100%",resizeMode:'contain'}} source={{ uri: `http://192.168.100.137:8700${item.image}` }} />
        }
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor:COLOR.white,flex:1}}>
      <HeaderHome />

      {/* Carousel */}
      <View style={{ height: SIZE.height/4,justifyContent:"center", alignItems:"center"}}>
        <Carousel
          layout={"default"}
          ref={ref}
          autoplay
          data={dataBanner.length === 0 ? carouselItems : dataBanner}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          loop
          onSnapToItem = { index => setActiveIndex(index)} />
        <Pagination
          dotsLength={dataBanner.length === 0 ? carouselItems.length : dataBanner.length}
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
        <ScrollView 
          horizontal
          scrollEnabled={true}
          contentContainerStyle={{
            // flexDirection:"row",
            // flexWrap:"wrap",
            // height:90,
            backgroundColor:"red"
          }}
          >
          {/* {carouselItems.map((item,index) => {
              return (
                <TouchableOpacity activeOpacity={0.8} key={`${index}-cart`}>
                  <View style={{
                    // backgroundColor:"#FCCB00",
                    flexWrap:"wrap",
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
              )
          })} */}
          <FlatList
            numColumns={6}
            data={carouselItems}
            keyExtractor={(item,index) => index.toString()}
            renderItem={_menuList}
          />
        </ScrollView>
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