import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { ImageArr } from '../CateHightLight/HightLight ';

const _renderItem = ({item,index}:{item:any,index:number}, onClick:() => void) => {
  console.log('onClick: ', onClick());
  console.log('item: ', item);
  console.log('index: ', index);
  return(
    <View>

    </View>
  )
}

const deleteItem = ({item,index}:{item:any,index:number}) => {
  console.log(item, index);
  // let a = listData;
  // a.splice(index, 1);
  // console.log(a);
  // setListData([...a]);
};

export const Swipe = () => {
  return(
    <View style={{flex: 1,}}>
      <FlatList 
        data={ImageArr}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={(v) => 
          _renderItem(v,() => deleteItem(v)
        )}
      />
    </View>
  );
}