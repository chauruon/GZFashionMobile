import React,{useState,useRef,useEffect,useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  useWindowDimensions,
  ScrollView,
  ViewStyle,
  StyleProp,
} from 'react-native';
import { COLOR, SIZE, TEXT,SHADOWS } from '../../theme';

interface Props {
  data: Array<Object>,
  heightImage?: Number | undefined,
  height?: Number | undefined,
  heightBanner?: Number | undefined,
  ImageBannerStyle?: StyleProp<ViewStyle>,
  imageBelowStyle?: StyleProp<ViewStyle>,
}

export const Banner = ({ 
  data,
  heightImage,
  height,
  heightBanner,
  ImageBannerStyle,
  imageBelowStyle,
}: Props) => {

  let stepCarousel = useRef(null);
  const  stepImage = useRef([]);
  let currentOffset = 0;
  const [imageIndex,setImageIndex] = useState(0);
  const [changedViewableItems,setChangedViewableItems] = useState([])

  const handles = (e:any) => {
    if (!e) return;
    const { nativeEvent } = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      currentOffset = nativeEvent.contentOffset.x;
      if (currentOffset > 0) {
        setImageIndex(Math.floor((currentOffset + SIZE.width / 2) / SIZE.width ))
      }
    }
  }
  const changeIndex =(index= 0) => {
    stepCarousel?.current?.scrollToIndex({ index: index, animted: true,viewOffset: imageIndex, viewPosition: currentOffset});
  }

  const onViewRef = React.useRef(({viewableItems,changed}:any) => {
    let Check = [];
    for (var i = 0; i < viewableItems.length; i++) {
      Check.push(viewableItems[i].item);
    }
    stepImage.current = changed
    setChangedViewableItems(changed)
  });
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 80 });

  const styles = styleWithProps( );
  return (
    <View style={{height: height | SIZE.height/2.9,}}>
      <FlatList 
        data={data}
        horizontal
        pagingEnabled
        ref={stepCarousel}
        onScroll={handles}
        scrollEventThrottle={16}
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}

        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}

        renderItem={({item,index})=>{
          return(
            <View style={[ImageBannerStyle,{height: heightBanner ||  200, width:SIZE.width,}]}>
              <Image style={{height: heightBanner || 200, width:SIZE.width, resizeMode:"contain",}} source={item}/>
            </View>
          );
        }}
      />
      {console.log(`stepImage.current`,stepImage.current)}
      <FlatList 
        data={data}
        horizontal
        keyExtractor={index => index.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index}) => {
          return(
            <View style={[styles.imageItem,{ height: 60 || heightImage,}]}>
              <TouchableOpacity onPress={() => changeIndex(index)}>
                <Image 
                  style={ stepImage.current[0]?.index === index  ?
                    [styles.unActiveBtnItemImg,{borderColor: COLOR.error,...imageBelowStyle,} ] 
                  :
                    styles.unActiveBtnItemImg} source={item}/>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  )
}


const styleWithProps = () => {
  return StyleSheet.create({
    containerItem:{
      height:SIZE.height / 4,
      width:SIZE.width,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems:"center",
      backgroundColor:"red"
    },
    imageItem:{
      marginTop:5,
      height: 60 ,
    },
    unActiveBtnItemImg:{
      borderWidth:1,
      borderRadius:10,
      marginLeft:5,
      // top:10,
      height:60,
      width:60,
      justifyContent:"center",
      alignItems:"center",
      // ...StyleSheet.absoluteFillObject,
    },
  
  });
};
