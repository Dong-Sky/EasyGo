'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _createNavigationContainer=require('../createNavigationContainer');var _createNavigationContainer2=_interopRequireDefault(_createNavigationContainer);
var _createNavigator=require('./createNavigator');var _createNavigator2=_interopRequireDefault(_createNavigator);
var _CardStack=require('../views/CardStack');var _CardStack2=_interopRequireDefault(_CardStack);
var _StackRouter=require('../routers/StackRouter');var _StackRouter2=_interopRequireDefault(_StackRouter);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=













function(routeConfigMap){var stackConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var

containerOptions=










stackConfig.containerOptions,initialRouteName=stackConfig.initialRouteName,initialRouteParams=stackConfig.initialRouteParams,paths=stackConfig.paths,headerComponent=stackConfig.headerComponent,headerMode=stackConfig.headerMode,mode=stackConfig.mode,cardStyle=stackConfig.cardStyle,onTransitionStart=stackConfig.onTransitionStart,onTransitionEnd=stackConfig.onTransitionEnd,navigationOptions=stackConfig.navigationOptions;
var stackRouterConfig={
initialRouteName:initialRouteName,
initialRouteParams:initialRouteParams,
paths:paths,
navigationOptions:navigationOptions};

var router=(0,_StackRouter2.default)(routeConfigMap,stackRouterConfig);
return(0,_createNavigationContainer2.default)((0,_createNavigator2.default)(router)(function(props){return(
_react2.default.createElement(_CardStack2.default,_extends({},
props,{
headerComponent:headerComponent,
headerMode:headerMode,
mode:mode,
cardStyle:cardStyle,
onTransitionStart:onTransitionStart,
onTransitionEnd:onTransitionEnd})));}),

containerOptions);
};