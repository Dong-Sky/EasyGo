import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class Tarbar_bottom extends Component {
  render(){
    return(
      <View style={styles.tarbar_bottom}>
        <View style={{width:25,height:25,marginLeft:27.5,marginRight:21.25,}}>
          <Image source={require('../icon/tarbar/home.png')} resizeMode='cover'/>
        </View>
        <View style={{width:25,height:25,marginLeft:21.25,marginRight:21.25,}}>
          <Image source={require('../icon/tarbar/comment.png')} resizeMode='cover'/>
        </View>
        <View style={{width:69,height:69,marginLeft:11.75,marginRight:11.75,marginBottom:28,borderBottomLeftRadius:34.5,borderBottomRightRadius:34.5,borderTopLeftRadius:34.5, borderTopRightRadius:34.5,backgroundColor:'#FFFFFF',alignItems:'center',justifyContent: 'center',}}>
          <Image source={require('../icon/tarbar/send.png')} resizeMode='cover'/>
        </View>
        <View style={{width:25,height:25,marginLeft:21.25,marginRight:21.25,}}>
          <Image source={require('../icon/tarbar/compass.png')} resizeMode='cover'/>
        </View>
        <View style={{width:25,height:25,marginLeft:21.25,marginRight:27.5,}}>
          <Image source={require('../icon/tarbar/account.png')} resizeMode='cover'/>
        </View>
      </View>

);
}
}

const styles = StyleSheet.create({
  tarbar_bottom: {
    position:'relative',
    borderWidth: 1,
    borderColor:'#d8dfd6',
    height: 49,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
  },
});
