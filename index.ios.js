/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
    Navigator,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  StackRouter,
  NavigationActions,

} from 'react-navigation';
import service from './common/service.js';
import util from './common/util.js';
import DeviceStorage from './common/DeviceStorage.js';
import account from './page/account.js';
import home from './page/home.js';
import compass from './page/compass.js';
import comment from './page/comment.js';
import send from './page/send.js';
import user from './common/user.js';
import{
    AsyncStorage
}from 'react-native';
var token = 'thisIsToken';
var uid = '0';

//定义欢迎页
class welcome extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={() => {
          DeviceStorage.get(user.token)
          .then((value) => {
            var usr = {
            };
            usr.token = value;
            return usr;
          }).then((usr) => {
            DeviceStorage.get(user.uid)
            .then((value) => {
              usr.uid = value;
              return usr;
            }).then((usr) => {
                navigate('main',{usr:usr});
            }
            )
          })
        }}>
          Let's go!
        </Text>
        <Text onPress={() => console.log('......!!')}>
          letsup
        </Text>
      </View>
    );
  }
}
//定义登录页
class login extends Component{
  constructor(props) {
      super(props);
      this.state = {
            username: 'songsj125@gmail.com',//songsj125@gmail.com
            password: '11111111',//1111
            token: null,
            uid: null,
      }
    }
  //定义登录跳转方法
  render(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    /*const goMain = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'main',
          params:{
            usr: {
              token:this.state.token,
              uid:this.state.uid,
            }
          },
      }),
      ]
    })*/
    return(
        <View style={styles.container}>
          {/*用户名*/}
            <TextInput
            style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1,alignSelf:'center'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            autoCapitalize = 'none'
          />
          {/*密码*/}
            <TextInput
            style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1,alignSelf:'center'}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            autoCapitalize = 'none'
          />
          {/*登录*/}
           <Text style={styles.instructions} onPress={() => util.postRequest(
             service.BaseUrl,
             'a=oauth&v=1.0.0&username='+this.state.username+'&password='+this.state.password,
             function(response){
               console.log(response);
               if(!response.status){
                 DeviceStorage.save(user.token,response.data.token)
                 .then(DeviceStorage.save(user.uid,response.data.uid))
                 .then(this.setState({
                   token:response.data.token,
                   uid:response.data.uid,
                 }))
                 .then(this.props.navigation.dispatch(NavigationActions.reset({
                   index: 0,
                   actions: [
                     NavigationActions.navigate({
                       routeName: 'main',
                       params:{
                         usr: {
                           token:this.state.token,
                           uid:this.state.uid,
                         }
                       },
                   }),
                   ]
                 })))
               } else { 
                 alert(response.err);
               }
             }.bind(this),
             function(err){
               console.log(err);}.bind(this),
           )}>
             登录
           </Text>
           <Text onPress={() => {
             console.log(DeviceStorage.get(user.token));
             console.log(DeviceStorage.get(user.uid));
              }
            }>
             获取
           </Text>
           <Text onPress={() => console.log(this.state)}>
             input
           </Text>
           <Text onPress={() => this.props.navigation.dispatch(goMain)}>
             gogogo!
           </Text>
         </View>
    );
  }
}
//定义主界面，共有四个分页面
const main = TabNavigator({
  home: {
        screen: home,
        navigationOptions: {
            tabBar: {
                label: 'home',
                icon: ({tintColor}) => (
                    <Image
                        source={require('./icon/tarbar/home.png')}
                        style={[{tintColor: tintColor},styles.icon]}
                    />
                ),
            },
        }
    },
    comment: {
          screen: comment,
          navigationOptions: {
              tabBar: {
                  label: 'comment',
                  icon: ({tintColor}) => (
                      <Image
                          source={require('./icon/tarbar/comment.png')}
                          style={[{tintColor: tintColor},styles.icon]}
                      />
                  ),
              },
          }
      },
      send: {
            screen: send,
            navigationOptions: {
                tabBar: {
                  label: ' ',
                    icon: (tintColor) => (

                        <View style={{backgroundColor:'#333333',width:69,height:69,marginLeft:11.75,marginRight:11.75,marginBottom:28,borderBottomLeftRadius:34.5,borderBottomRightRadius:34.5,borderTopLeftRadius:34.5, borderTopRightRadius:34.5,alignItems:'center',justifyContent: 'center',}}>

                            <Image
                                source={require('./icon/tarbar/send.png')}
                                style={[{tintColor: '#e62a68'},styles.icon_send]}/>
                        </View>
                    ),
                },
            },
        },
    compass: {
            screen: compass,
            navigationOptions: {
                tabBar: {
                    label: 'compass',
                    icon: ({tintColor}) => (
                        <Image
                            source={require('./icon/tarbar/compass.png')}
                            style={[{tintColor: tintColor},styles.icon]}
                        />
                    ),
                },
            }
        },
        account: {
              screen: account,
              navigationOptions: {
                  tabBar: {
                      label: 'account',
                      icon: ({tintColor}) => (
                          <Image
                              source={require('./icon/tarbar/account.png')}
                              style={[{tintColor: tintColor},styles.icon]}
                          />
                      ),
                  },
              }
          },
},
  {
    animationEnabled: false,// 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#fbe994', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        showLabel: true,
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#333333', // TabBar 背景色
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
    onTransitionStart: ()=>{opacity=1;console.log('导航开始'); },  // 回调
    onTransitionEnd: ()=>{ opacity=0.3;console.log('导航结束'); }  // 回调
  }
);
//定义index.js的默认类，为导航器
const imarket = StackNavigator({
  welcome: { screen: welcome },
  main: { screen: main },
  account: { screen: account },
  login:{ screen: login },
}, {
    initialRouteName: 'welcome', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        header: {  // 导航栏相关设置项
            //backTitle: '返回',  // 左上角返回键文字
            style: {
                backgroundColor: '#fff'
            },
            titleStyle: {
                color: 'green'
            }
        },
        cardStack: {
            gesturesEnabled: true,
        },
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{console.log('导航开始'); },  // 回调
    onTransitionEnd: ()=>{ console.log('导航结束'); }  // 回调
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#e1e8e2',
    },
    backgroundImage:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   width:null,
  //  width:null,
   //不加这句，就是按照屏幕高度自适应
   //加上这几，就是按照屏幕自适应
   //resizeMode:Image.resizeMode.contain,
   //祛除内部元素的白色背景
   backgroundColor:'rgba(0,0,0,0)',
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
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
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

AppRegistry.registerComponent('imarket', () => imarket);
export default imarket;
