import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//顶部状态栏
export default class Statusbar extends Component {
  render(){
    return(
  <View style={styles.statusBar}>
  </View>
);
}
}

const styles = StyleSheet.create({
  statusBar: {
    height: 22,
    backgroundColor: '#333333',
  },
});
