'use strict';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');
var _createConfigGetter=require('../createConfigGetter');var _createConfigGetter2=_interopRequireDefault(_createConfigGetter);

var _addNavigationHelpers=require('../../addNavigationHelpers');var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

test('should get config for screen',function(){var


HomeScreen=function(_Component){_inherits(HomeScreen,_Component);function HomeScreen(){_classCallCheck(this,HomeScreen);return _possibleConstructorReturn(this,(HomeScreen.__proto__||Object.getPrototypeOf(HomeScreen)).apply(this,arguments));}_createClass(HomeScreen,[{key:'render',value:function render()







{
return null;
}}]);return HomeScreen;}(_react.Component);HomeScreen.navigationOptions={title:function title(_ref){var state=_ref.state;return'Welcome '+(state.params?state.params.user:'anonymous');},header:{visible:true}};var


SettingsScreen=function(_Component2){_inherits(SettingsScreen,_Component2);function SettingsScreen(){_classCallCheck(this,SettingsScreen);return _possibleConstructorReturn(this,(SettingsScreen.__proto__||Object.getPrototypeOf(SettingsScreen)).apply(this,arguments));}_createClass(SettingsScreen,[{key:'render',value:function render()








{
return null;
}}]);return SettingsScreen;}(_react.Component);SettingsScreen.navigationOptions={title:'Settings!!!',permalink:'',header:{visible:false}};var


NotificationScreen=function(_Component3){_inherits(NotificationScreen,_Component3);function NotificationScreen(){_classCallCheck(this,NotificationScreen);return _possibleConstructorReturn(this,(NotificationScreen.__proto__||Object.getPrototypeOf(NotificationScreen)).apply(this,arguments));}_createClass(NotificationScreen,[{key:'render',value:function render()







{
return null;
}}]);return NotificationScreen;}(_react.Component);NotificationScreen.navigationOptions={title:function title(){return'42';},header:function header(_ref2){var state=_ref2.state;return{visible:state.params?!state.params.fullscreen:true};}};


var getScreenConfig=(0,_createConfigGetter2.default)({
Home:{screen:HomeScreen},
Settings:{screen:SettingsScreen},
Notifications:{
screen:NotificationScreen,
navigationOptions:{
title:function title(){return'10 new notifications';},
count:0}}});




var routes=[
{key:'A',routeName:'Home'},
{key:'B',routeName:'Home',params:{user:'jane'}},
{key:'C',routeName:'Settings'},
{key:'D',routeName:'Notifications'},
{key:'E',routeName:'Notifications',params:{fullscreen:true}}];


expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[0],dispatch:function dispatch(){return false;}}),'title')).toEqual('Welcome anonymous');
expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[1],dispatch:function dispatch(){return false;}}),'title')).toEqual('Welcome jane');

expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[0],dispatch:function dispatch(){return false;}}),'header').visible).toEqual(true);
expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[2],dispatch:function dispatch(){return false;}}),'title')).toEqual('Settings!!!');
expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[2],dispatch:function dispatch(){return false;}}),'permalink')).toEqual('');

expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[2],dispatch:function dispatch(){return false;}}),'header').visible).toEqual(false);
expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[3],dispatch:function dispatch(){return false;}}),'title')).toEqual('10 new notifications');
expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[3],dispatch:function dispatch(){return false;}}),'count')).toEqual(0);

expect(getScreenConfig((0,_addNavigationHelpers2.default)({state:routes[4],dispatch:function dispatch(){return false;}}),'header').visible).toEqual(false);
});

test('should throw if the route does not exist',function(){


var HomeScreen=function HomeScreen(){return null;};
HomeScreen.navigationOptions={
title:'Home screen',
header:{
visible:true}};



var getScreenConfig=(0,_createConfigGetter2.default)({
Home:{screen:HomeScreen}});


var routes=[
{key:'B',routeName:'Settings'}];


expect(
function(){return getScreenConfig({state:routes[0],dispatch:function dispatch(){return false;}},'title');}).
toThrowError("There is no route defined for key Settings.\nMust be one of: 'Home'");
});

test('should throw if the screen is not defined under the route config',function(){


var getScreenConfig=(0,_createConfigGetter2.default)({
Home:{}});


var routes=[
{key:'B',routeName:'Home'}];


expect(
function(){return getScreenConfig({state:routes[0],dispatch:function dispatch(){return false;}},'title');}).
toThrowError('Route Home must define a screen or a getScreen.');
});

test('should get recursive config for screen',function(){var
NotificationScreen=function(_Component4){_inherits(NotificationScreen,_Component4);function NotificationScreen(){_classCallCheck(this,NotificationScreen);return _possibleConstructorReturn(this,(NotificationScreen.__proto__||Object.getPrototypeOf(NotificationScreen)).apply(this,arguments));}return NotificationScreen;}(_react.Component);NotificationScreen.
router={
getScreenConfig:function getScreenConfig(){return'Baz';}};NotificationScreen.

navigationOptions={
title:function title(navigation,childTitle){return'Bar '+childTitle;}};



var getScreenConfig=(0,_createConfigGetter2.default)({
Notifications:{
screen:NotificationScreen,
navigationOptions:{
title:function title(navigation,childTitle){return'Foo '+childTitle;}}}});




var childNavigation=(0,_addNavigationHelpers2.default)({
state:{
key:'A',
routeName:'Notifications',
index:0,
routes:[{key:'A',routeName:'Anything'}]},

dispatch:function dispatch(){return false;}});


expect(getScreenConfig(childNavigation,'title')).toEqual('Foo Bar Baz');
});

test('Allow passthrough configuration',function(){var
NotificationScreen=function(_Component5){_inherits(NotificationScreen,_Component5);function NotificationScreen(){_classCallCheck(this,NotificationScreen);return _possibleConstructorReturn(this,(NotificationScreen.__proto__||Object.getPrototypeOf(NotificationScreen)).apply(this,arguments));}return NotificationScreen;}(_react.Component);NotificationScreen.
navigationOptions={
tabBar:function tabBar(navigation,_tabBar){return{deepConfig:'also '+_tabBar.color};}};



var getScreenConfig=(0,_createConfigGetter2.default)({
Notifications:{
screen:NotificationScreen}});



var childNavigation=(0,_addNavigationHelpers2.default)({
state:{
key:'A',
routeName:'Notifications'},

dispatch:function dispatch(){return false;}});


expect(getScreenConfig(childNavigation,'tabBar',{color:'red'})).toEqual({deepConfig:'also red'});
});