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
    ListView,
    TouchableOpacity,
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
} from 'react-navigation';
import service from '../common/service.js';
import util from '../common/util.js';
import DeviceStorage from '.././common/DeviceStorage.js';
import Statusbar from '../new_modules/statusbar.js';
import Tarbar_top from '../new_modules/tarbar_top.js';
import user from '../common/user.js';
var token = 'thisIsToken';
var uid = '0';


class home1 extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
      const {params} = this.props.navigation.state;
      const {navigate} = this.props.navigation;

      return (
          <View style = {styles.container}>
            {/*顶部*/}
            <View style = {styles.body}>
              <View>
              <Text style={styles.welcome} onPress={() => alert(
                "token: "+params.usr.token+"\n"+
                "uid: "+params.usr.uid+"\n"
              )}>
                  用户信息
              </Text>
              <Text style={styles.instructions} onPress={() => navigate('itemlist',{usr:params.usr})}>
                go to list !
              </Text>
              <Text style={styles.instructions} onPress={() => console.log(params)}>
                  print information
              </Text>
            </View>
          </View>
          {/*底部菜单*/}
          {/*<Tarbar_bottom></Tarbar_bottom>*/}
        </View>


    );
    }
}

class itemlist extends Component{
  constructor(props) {
      super(props);
      var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,});
      this.state = {
          login: {
              data: {}
          },
      item: {data:[],},
      dataSource: ds.cloneWithRows([]),
    };
  }
  _genRows(){
        const {params} = this.props.navigation.state;
        var dataBlob = ['1','2','3'];
        util.postRequest(service.BaseUrl,
        'a=category&v=1.0.0&token='+params.usr.token+'&uid='+params.usr.uid,
          function(response){
          if(!response.status){
            var i = 0;
            while(response.data.data[i]){
                dataBlob[i] = response.data.data[i].name;
                i++;
                console.log(dataBlob);
            }
          }
        }.bind(this),
        function(err){
          console.log(err);
        }.bind(this),
      );
      return dataBlob;
    }

  render(){
    const {params} = this.props.navigation.state;
    const {navigate} = this.props.navigation;
    return(
      <View>
      { /*<ListView
      dataSource={dataSource}
      enableEmptySections={true}
      removeClippedSubviews={false}
      renderRow={(rowData) =><Text>{rowData}</Text>}/>*/}
      <Text onPress={() => console.log(this.state.dataSource)}>
        test
      </Text>
      <Text>{this._genRows()}</Text>
      </View>
    );
  }
}


  const home = StackNavigator({
  home1: {screen: home1},
  itemlist: {screen: itemlist},
},{
    initialRouteName: 'home1', // 默认显示界面
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
    body: {
        flex: 1,
        backgroundColor: '#e1e8e2',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    tarbar_bottom: {
      position:'relative',
      borderWidth: 1,
      borderColor:'#d8dfd6',
      height: 49,
      backgroundColor: '#333333',
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
export default home;
