import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    Image,
    Button,
    Navigator
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
} from 'react-navigation';
import service from '../common/service.js';
import util from '../common/util.js';
import login from '../index.ios.js';
import DeviceStorage from '.././common/DeviceStorage.js';

 export default class send1 extends Component {
 render() {
   const {params} = this.props.navigation.state;
   const {navigate} = this.props.navigation;
   return (
     <View style={styles.container}>
       <Text style={styles.welcome} onPress={() => navigate('welcome')}>
        welcome to send1!
       </Text>
     </View>
   );
 }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    body: {
        flex: 1,
        backgroundColor: '#e1e8e2',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
  icon: {
   width: 25,
   height: 25,
 },
 icon_send: {
  width: 50,
  height: 50
},
});
