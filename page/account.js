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
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  NavigationActions,
} from 'react-navigation';
import service from '../common/service.js';
import util from '../common/util.js';
import index from '../index.ios.js';
import DeviceStorage from '.././common/DeviceStorage.js';
import user from '../common/user.js';
import home from './home.js';

class account1 extends Component {
  //用户登出方法loginOut()
  loginOut(url,v,token,uid,successCallback,failedCallback){
    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:'a=user&m=out&v='+v+'&token='+token+'&uid='+uid,
    })
    .then((response) => response.json())
    .then((responseJson) => successCallback(responseJson))
    .catch((error) => failedCallback(error))
  }
  //end
 render() {
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    //跳转到登录页面方法goLogin()
    //定义一个导航器重置方法，重置导航状态，使登录页面不可返回。
    //跳转登录页面方法
    const goLogin = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: 'login'}),
    ]
    })
    //
    //登出方法
    const outLogin = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: 'account1',
        params: {
        usr: {
          token:null,
          uid:null,
        },
      },
    }),
    ]
    })
    var loginout = <Text style={styles.welcome}
      onPress={
        () => {
          this.loginOut(
          service.BaseUrl,
          service.version,
          params.usr.token,
          params.usr.uid,
          function(response){
            console.log(response);
            //服务器端登出后还需要消除本地的登录状态。
            DeviceStorage.delete(user.token)
            .then((value) => {
              DeviceStorage.delete(user.uid)
            })
            .then(() => this.props.navigation.dispatch(outLogin))
            .then(() => alert('登出成功'))
            //
          }.bind(this),
          function(err){
            console.log(err);
            alert('登出失败');
          }.bind(this),
        );
      }}>
      loginOut
    </Text>;
    var loginin = <Text style={styles.welcome} onPress={() => this.props.navigation.dispatch(goLogin)}>
      loginIN
    </Text>;
    var islogin = <Text style={styles.welcome} onPress={() => console.log(params)}>您已经登录</Text>;
    var notlogin = <Text style={styles.welcome} onPress={() => console.log(params)}>您未登录</Text>;
    //end
   return (
     <View style={styles.container}>
       <ScrollView>
         <View style={styles.header}>
           <View style={styles.user}>
               {(params.usr.token&&params.usr.uid)?loginout:loginin}
               {(params.usr.token&&params.usr.uid)?islogin:notlogin}
           </View>
           <View style={styles.order}>
             <View style={{flex:1,borderWidth:1,borderColor:'#e1e8e2'}}>
               <Text onPress={() => console.log(params.usr)}>
                 information
               </Text>
             </View>
             <View style={{flex:1,borderWidth:1,borderColor:'#e1e8e2'}}>
             </View>
           </View>
         </View>
         <View style={styles.body}>
           <View style={{height:80,borderTopWidth:1,borderColor:'#e1e8e2'}}>
           </View>
           <View style={{height:80,borderTopWidth:1,borderColor:'#e1e8e2'}}>
           </View>
           <View style={{height:80,borderTopWidth:1,borderColor:'#e1e8e2'}}>
           </View>
         </View>
        </ScrollView>
      </View>
   );
 }
}

class login extends Component{
  constructor(props) {
      super(props);
      this.state = {
            username: 'songsj125@gmail.com',//songsj125@gmail.com
            password: '1111',//1111
            token: null,
            uid: null,
      }
  //定义登录跳转方法
  const login = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({
      routeName: 'account1',
      usr:{
        token:1,
        uid:1,
      }
  }),
  ]
  })
}
  render(){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return(
        <View style={styles.container}>
            <TextInput
            style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1,alignSelf:'center'}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            autoCapitalize = 'none'
          />
            <TextInput
            style={{height: 40,width:200, borderColor: 'gray', borderWidth: 1,alignSelf:'center'}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
            autoCapitalize = 'none'
          />
           <Text style={styles.instructions} onPress={() => util.postRequest(
             service.BaseUrl,
             'a=oauth&v=1.0.0&username='+this.state.username+'&password='+this.state.password,
             function(response){
               console.log(response);
               if(!response.status){
                 this.setState({
                   token:response.data.token,
                   uid:response.data.uid,
                 });
                 DeviceStorage.save(user.token,response.data.token)
                 .then(DeviceStorage.save(user.uid,response.data.uid))
                 .then(() => navigate('main',
               {
                usr:{
                  token:response.data.token,
                  uid:response.data.uid,
                }
               }
             )
           )
               }
               else{alert(response.err);}
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
           <Text onPress={() => this.props.navigation.dispatch(login)}>
             gogogo
           </Text>
         </View>
    );
  }
}

const account = StackNavigator({
  account1: {screen: account1 },
  login: { screen: login },
},{
    initialRouteName: 'account1', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        header: {  // 导航栏相关设置项
            backTitle: 'back',  // 左上角返回键文字
            style: {
                backgroundColor: '#333333'
            },
            titleStyle: {
                color: 'white'
            }
        },
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'none', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    onTransitionStart: ()=>{ console.log('start'); },  // 回调
    onTransitionEnd: ()=>{console.log('end'); }  // 回调
  }
);


const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
  header: {
        height: 250,
        backgroundColor: '#e1e8e2',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderWidth:1,
        borderBottomWidth:3,
        borderColor: '#e1e8e2',
    },
    //header内元素
    user: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderBottomWidth: 1,
        borderColor:'#e1e8e2',
    },
    order: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    //
    body: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#e1e8e2',
    },
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
export default account;
