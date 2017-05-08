'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');





var _withCachedChildNavigation=require('../../withCachedChildNavigation');var _withCachedChildNavigation2=_interopRequireDefault(_withCachedChildNavigation);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



























DrawerSidebar=function(_PureComponent){_inherits(DrawerSidebar,_PureComponent);function DrawerSidebar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,DrawerSidebar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=DrawerSidebar.__proto__||Object.getPrototypeOf(DrawerSidebar)).call.apply(_ref,[this].concat(args))),_this),_this.


_getScreenConfig=function(routeKey,configName){
var DrawerScreen=_this.props.router.getComponentForRouteName('DrawerClose');
return DrawerScreen.router.getScreenConfig(
_this.props.childNavigationProps[routeKey],
configName);

},_this.

_getLabel=function(_ref2){var focused=_ref2.focused,tintColor=_ref2.tintColor,route=_ref2.route;
var drawer=_this._getScreenConfig(route.key,'drawer');
if(drawer&&drawer.label){
return typeof drawer.label==='function'?
drawer.label({tintColor:tintColor,focused:focused}):
drawer.label;
}

var title=_this._getScreenConfig(route.key,'title');
if(typeof title==='string'){
return title;
}

return route.routeName;
},_this.

_renderIcon=function(_ref3){var focused=_ref3.focused,tintColor=_ref3.tintColor,route=_ref3.route;
var drawer=_this._getScreenConfig(route.key,'drawer');
if(drawer&&drawer.icon){
return typeof drawer.icon==='function'?
drawer.icon({tintColor:tintColor,focused:focused}):
drawer.icon;
}
return null;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(DrawerSidebar,[{key:'render',value:function render()

{
var ContentComponent=this.props.contentComponent;
return(
_react2.default.createElement(_reactNative.View,{style:[styles.container,this.props.style]},
_react2.default.createElement(ContentComponent,_extends({},
this.props.contentOptions,{
navigation:this.props.navigation,
getLabel:this._getLabel,
renderIcon:this._renderIcon,
router:this.props.router}))));



}}]);return DrawerSidebar;}(_react.PureComponent);exports.default=


(0,_withCachedChildNavigation2.default)(DrawerSidebar);

var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
backgroundColor:'#fff'}});