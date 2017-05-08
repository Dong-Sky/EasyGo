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

export default class compass extends Component {
  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to compass!
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
        alignItems: 'stretch'
    },
    body: {
        flex: 1,
        backgroundColor: '#e1e8e2',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
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
});
