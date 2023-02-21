import React, {useEffect,useState} from "react"
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  StyleSheet,
} from "react-native";
import { SHADOWS, SIZE, TEXT } from "../../theme";
import { Images } from "../../Utils/Images";
import { Icons } from "../../Utils/Icons";
import LinearGradient from 'react-native-linear-gradient';

export const ImageArr = [
  {
    id:1,
    title:"aasdfkjafk",
    image:Images.food1,
  },
  {
    id:2,
    title:"aasdfkjafk",
    image:Images.food2,
  },
  {
    id:3,
    title:"aasdfkjafk",
    image:Images.food3,
  },
  {
    id:4,
    title:"aasdfkjafk",
    image:Images.food4,
  },
  {
    id:5,
    title:"aasdfkjafk",
    image:Images.food5,
  },
]
export const gradian = ["#ffff","rgba(218,218,218,0.6)","rgba(90,90,90,0.4)"];

export const Propose = () => {
  
  const catePropose = async () => {

  }

  const itemPropose = ({ item, index }:{item:any,index:number}) => {
    return(
      <View style={{paddingHorizontal:5,marginBottom:10,}}>
        <TouchableOpacity >
          <View style={styles.itemList}>
            <Image style={styles.itemImage} source={item.image}/>
            
            <View style={styles.itemContent}>
              <TouchableOpacity>
                <Image style={styles.iconHeart} source={Icons.iconHeart}/>
              </TouchableOpacity>
              <LinearGradient colors={gradian} style={styles.boxBottom}>
                <View style={{paddingHorizontal:3}}>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  return(
    <View style={{marginTop:10}}>
      <FlatList
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={ImageArr}
        renderItem={itemPropose}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  itemList:{
    ...SHADOWS.sh,
    marginRight:10,
    borderRadius:10,
    // paddingHorizontal:5,
    height:160,
    width:(SIZE.width*2)/4.5,
    // backgroundColor:"#ffff"
  },
  itemImage:{
    borderRadius:10,
    height:"100%",
    width:"100%"
  },
  itemContent:{
    position:"absolute",
    borderRadius:10,
    height:"100%",
    width:"100%",
    justifyContent:"space-between"
    // backgroundColor:"red"
  },
  iconHeart:{
    height:20,
    width: 20,
    marginRight:5,
    marginTop:5,
    alignSelf:"flex-end",
  },
  boxBottom:{
    height:40,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    // backgroundColor:gradian
  },
  itemTitle:{
    // alignSelf:"stretch",
    // textAlignVertical:"bottom",
    // verticalAlign:"bottom",
    // textAlign:"justify"
  },
  loadMore:{
    // backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    height:160,
    width:(SIZE.width)/5,
  }
})