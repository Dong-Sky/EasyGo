import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

//顶部菜单栏
export default class Tarbar_top extends Component {
  render(){
    return(
      <View style={styles.tarbar_top}>
        <View style={{marginLeft:10,height:25,width:25,}}>
          <Image source={require('../icon/tarbar/list.png')} resizeMode='cover'/>
        </View>
        <View style={{flex:1,}}>
        </View>
        <View style={{marginRight:10,height:25,width:25,}}>
          <Image source={require('../icon/tarbar/search.png')} resizeMode='cover'/>
        </View>
      </View>

);
}
}

const styles = StyleSheet.create({
  tarbar_top: {
    height: 44,
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems:'center',
  },
});
