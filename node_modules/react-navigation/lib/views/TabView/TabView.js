'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');



var _reactNativeTabView=require('react-native-tab-view');





var _TabBarTop=require('./TabBarTop');var _TabBarTop2=_interopRequireDefault(_TabBarTop);
var _TabBarBottom=require('./TabBarBottom');var _TabBarBottom2=_interopRequireDefault(_TabBarBottom);
var _SceneView=require('../SceneView');var _SceneView2=_interopRequireDefault(_SceneView);
var _withCachedChildNavigation=require('../../withCachedChildNavigation');var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}
































var TabViewPager=void 0;

switch(_reactNative.Platform.OS){
case'android':
TabViewPager=_reactNativeTabView.TabViewPagerAndroid;
break;
case'ios':
TabViewPager=_reactNativeTabView.TabViewPagerScroll;
break;
default:
TabViewPager=_reactNativeTabView.TabViewPagerPan;}var


TabView=function(_PureComponent){_inherits(TabView,_PureComponent);function TabView(){var _ref;var _temp,_this,_ret;_classCallCheck(this,TabView);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=TabView.__proto__||Object.getPrototypeOf(TabView)).call.apply(_ref,[this].concat(args))),_this),_this.






_handlePageChanged=function(index){var
navigation=_this.props.navigation;
navigation.navigate(
navigation.state.routes[index].routeName);
},_this.

_renderScene=function(_ref2){var route=_ref2.route;
var TabComponent=_this.props.router.getComponentForRouteName(route.routeName);
return(
_react2.default.createElement(_SceneView2.default,{
screenProps:_this.props.screenProps,
component:TabComponent,
navigation:_this.props.childNavigationProps[route.key]}));


},_this.

_getLabel=function(_ref3){var focused=_ref3.focused,route=_ref3.route,tintColor=_ref3.tintColor;
var tabBar=_this.props.router.getScreenConfig(
_this.props.childNavigationProps[route.key],
'tabBar');


if(tabBar&&tabBar.label){
return typeof tabBar.label==='function'?
tabBar.label({tintColor:tintColor,focused:focused}):
tabBar.label;
}

var title=_this.props.router.getScreenConfig(
_this.props.childNavigationProps[route.key],
'title');

if(typeof title==='string'){
return title;
}

return route.routeName;
},_this.

_renderIcon=function(_ref4){var focused=_ref4.focused,route=_ref4.route,tintColor=_ref4.tintColor;
var tabBar=_this.props.router.getScreenConfig(
_this.props.childNavigationProps[route.key],
'tabBar');

if(tabBar&&tabBar.icon){
return typeof tabBar.icon==='function'?
tabBar.icon({tintColor:tintColor,focused:focused}):
tabBar.icon;
}
return null;
},_this.

_renderTabBar=function(props){var _this$props=




_this.props,tabBarOptions=_this$props.tabBarOptions,TabBarComponent=_this$props.tabBarComponent,animationEnabled=_this$props.animationEnabled;
if(typeof TabBarComponent==='undefined'){
return null;
}
return(
_react2.default.createElement(TabBarComponent,_extends({},
props,
tabBarOptions,{
navigation:_this.props.navigation,
getLabel:_this._getLabel,
renderIcon:_this._renderIcon,
animationEnabled:animationEnabled})));


},_this.

_renderPager=function(props){var _this$props2=



_this.props,swipeEnabled=_this$props2.swipeEnabled,animationEnabled=_this$props2.animationEnabled;

return(
_react2.default.createElement(TabViewPager,_extends({},
props,{
swipeEnabled:swipeEnabled,
animationEnabled:animationEnabled})));


},_this.

_configureTransition=function(){return null;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(TabView,[{key:'render',value:function render()

{var _props=






this.props,navigation=_props.navigation,tabBarComponent=_props.tabBarComponent,tabBarPosition=_props.tabBarPosition,animationEnabled=_props.animationEnabled,lazyLoad=_props.lazyLoad;

var renderHeader=void 0;
var renderFooter=void 0;var

state=this.props.navigation.state;
var tabBar=this.props.router.getScreenConfig(this.props.childNavigationProps[state.routes[state.index].key],'tabBar');

var tabBarVisible=tabBar?tabBar.visible!==false:true;

if(tabBarComponent!==undefined&&tabBarVisible){
if(tabBarPosition==='bottom'){
renderFooter=this._renderTabBar;
}else{
renderHeader=this._renderTabBar;
}
}

var configureTransition=void 0;

if(animationEnabled===false){
configureTransition=this._configureTransition;
}

return(

_react2.default.createElement(_reactNativeTabView.TabViewAnimated,{
style:styles.container,
navigationState:navigation.state,
lazy:lazyLoad,
renderHeader:renderHeader,
renderFooter:renderFooter,
renderScene:this._renderScene,
renderPager:this._renderPager,
configureTransition:configureTransition,
onRequestChangeTab:this._handlePageChanged}));


}}]);return TabView;}(_react.PureComponent);TabView.TabBarTop=_TabBarTop2.default;TabView.TabBarBottom=_TabBarBottom2.default;


var TabViewEnhanced=(0,_withCachedChildNavigation2.default)(TabView);

TabViewEnhanced.TabBarTop=_TabBarTop2.default;
TabViewEnhanced.TabBarBottom=_TabBarBottom2.default;exports.default=

TabViewEnhanced;

var styles=_reactNative.StyleSheet.create({
container:{
flex:1}});