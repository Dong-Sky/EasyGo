'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _createNavigator=require('./createNavigator');var _createNavigator2=_interopRequireDefault(_createNavigator);
var _createNavigationContainer=require('../createNavigationContainer');var _createNavigationContainer2=_interopRequireDefault(_createNavigationContainer);
var _TabRouter=require('../routers/TabRouter');var _TabRouter2=_interopRequireDefault(_TabRouter);
var _TabView=require('../views/TabView/TabView');var _TabView2=_interopRequireDefault(_TabView);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}














var TabNavigator=function TabNavigator(
routeConfigs)

{var config=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

var mergedConfig=_extends({},TabNavigator.Presets.Default,config);var

containerOptions=







mergedConfig.containerOptions,tabBarComponent=mergedConfig.tabBarComponent,tabBarPosition=mergedConfig.tabBarPosition,tabBarOptions=mergedConfig.tabBarOptions,swipeEnabled=mergedConfig.swipeEnabled,animationEnabled=mergedConfig.animationEnabled,lazyLoad=mergedConfig.lazyLoad,tabsConfig=_objectWithoutProperties(mergedConfig,['containerOptions','tabBarComponent','tabBarPosition','tabBarOptions','swipeEnabled','animationEnabled','lazyLoad']);
var router=(0,_TabRouter2.default)(routeConfigs,tabsConfig);
return(0,_createNavigationContainer2.default)((0,_createNavigator2.default)(router)(function(props){return(
_react2.default.createElement(_TabView2.default,_extends({},
props,{
tabBarComponent:tabBarComponent,
tabBarPosition:tabBarPosition,
tabBarOptions:tabBarOptions,
swipeEnabled:swipeEnabled,
animationEnabled:animationEnabled,
lazyLoad:lazyLoad})));}),

containerOptions);
};

var Presets={
iOSBottomTabs:{
tabBarComponent:_TabView2.default.TabBarBottom,
tabBarPosition:'bottom',
swipeEnabled:false,
animationEnabled:false,
lazyLoad:false},

AndroidTopTabs:{
tabBarComponent:_TabView2.default.TabBarTop,
tabBarPosition:'top',
swipeEnabled:true,
animationEnabled:true,
lazyLoad:false}};





















TabNavigator.Presets={
iOSBottomTabs:Presets.iOSBottomTabs,
AndroidTopTabs:Presets.AndroidTopTabs,
Default:_reactNative.Platform.OS==='ios'?Presets.iOSBottomTabs:Presets.AndroidTopTabs};exports.default=


TabNavigator;