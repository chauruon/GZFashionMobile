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
import { COLOR, SIZE } from '../../theme';
import { Icons } from '../../Utils/Icons';
import { ImageArr } from '../CateHightLight/HightLight ';

export const SwipeableList = () => {
  const [listData, setListData] = useState(ImageArr);
  let row: Array<any> = [];
  let prevOpenedRow:any;

  const widthButton = 100;

  const _renderItem = ({ item, index }:{item:any,index:number}, onClick:()=>void) => {
    //
    const closeRow = (index:number) => {
      console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress:any, dragX:any, onClick:() => void ) => {
      console.log('dragX: ', dragX);
      console.log('progress: ', progress);
      return (
        <View
          style={{
            margin: 0,
            alignSelf:"center",
            width: widthButton,
            flexDirection:"row",
          }}>
          <TouchableOpacity style={{
            backgroundColor:"red",
            width:widthButton/2,
            justifyContent: 'center',
            alignItems:"center"
          }} onPress={onClick}>
            <Image style={{width:20,height:20}} source={Icons.iconDeleteTrash}/>
          </TouchableOpacity>


          <TouchableOpacity style={{
            backgroundColor:COLOR.gray24,
            width:widthButton/2,
            justifyContent: 'center',
            alignItems:"center",
            height:40,
          }} onPress={onClick}>
            <Image style={{width:20,height:20}} source={Icons.iconEdit}/>
          </TouchableOpacity>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>renderRightActions(progress, dragX, onClick)}
        onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightThreshold={-100}
        
        >
        <View
          style={{
            margin: 4,
            borderColor: 'grey',
            borderWidth: 1,
            padding: 9,
            backgroundColor: 'white',
          }}>
          <Text>{item.title}</Text>
        </View>
      </Swipeable>
    );
  };

  const deleteItem = ({item,index}:{item:any,index:number}) => {
    console.log(item, index);
    let a = listData;
    a.splice(index, 1);
    console.log(a);
    setListData([...a]);
  };


  return(
    <View style={{flex:1}}>
      <FlatList
        data={listData}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={(v) =>
          _renderItem(v, () => {
            console.log('Pressed', v);
            deleteItem(v);
          })
        }
      />
    </View>
  )
}
