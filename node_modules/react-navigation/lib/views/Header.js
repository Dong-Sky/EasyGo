'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');






var _ReactComponentWithPureRenderMixin=require('react/lib/ReactComponentWithPureRenderMixin');var _ReactComponentWithPureRenderMixin2=_interopRequireDefault(_ReactComponentWithPureRenderMixin);

var _HeaderTitle=require('./HeaderTitle');var _HeaderTitle2=_interopRequireDefault(_HeaderTitle);
var _HeaderBackButton=require('./HeaderBackButton');var _HeaderBackButton2=_interopRequireDefault(_HeaderBackButton);
var _HeaderStyleInterpolator=require('./HeaderStyleInterpolator');var _HeaderStyleInterpolator2=_interopRequireDefault(_HeaderStyleInterpolator);
var _PropTypes=require('../PropTypes');var _PropTypes2=_interopRequireDefault(_PropTypes);
var _addNavigationHelpers=require('../addNavigationHelpers');var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}








































var APPBAR_HEIGHT=_reactNative.Platform.OS==='ios'?44:56;
var STATUSBAR_HEIGHT=_reactNative.Platform.OS==='ios'?20:0;
var TITLE_OFFSET=_reactNative.Platform.OS==='ios'?70:40;var

Header=function(_React$PureComponent){_inherits(Header,_React$PureComponent);function Header(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Header);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Header.__proto__||Object.getPrototypeOf(Header)).call.apply(_ref,[this].concat(args))),_this),_this.


















state={
widths:{}},_this.





































_renderTitleComponent=function(props){
var titleStyle=_this._getHeaderTitleStyle(props.navigation);
var color=_this._getHeaderTintColor(props.navigation);
var title=_this._getHeaderTitle(props.navigation);



var onLayoutIOS=_reactNative.Platform.OS==='ios'?
function(e){
_this.setState({
widths:_extends({},
_this.state.widths,_defineProperty({},
props.key,e.nativeEvent.layout.width))});


}:
undefined;

return(
_react2.default.createElement(_HeaderTitle2.default,{
onLayout:onLayoutIOS,
style:[color?{color:color}:null,titleStyle]},

title));


},_this.

_renderLeftComponent=function(props){
if(props.scene.index===0||!props.onNavigateBack){
return null;
}
var tintColor=_this._getHeaderTintColor(props.navigation);
var previousNavigation=(0,_addNavigationHelpers2.default)(_extends({},
props.navigation,{
state:props.scenes[props.scene.index-1].route}));

var backButtonTitle=_this._getBackButtonTitle(previousNavigation);
var width=_this.state.widths[props.key]?
(props.layout.initWidth-_this.state.widths[props.key])/2:
undefined;
return(
_react2.default.createElement(_HeaderBackButton2.default,{
onPress:props.onNavigateBack,
tintColor:tintColor,
title:backButtonTitle,
width:width}));


},_this.

_renderRightComponent=function(){return null;},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Header,[{key:'_getHeaderTitle',value:function _getHeaderTitle(navigation){var header=this.props.router.getScreenConfig(navigation,'header');var title=void 0;if(header&&header.title){title=header.title;}else{title=this.props.router.getScreenConfig(navigation,'title');}return typeof title==='string'?title:undefined;}},{key:'_getBackButtonTitle',value:function _getBackButtonTitle(navigation){var header=this.props.router.getScreenConfig(navigation,'header')||{};if(header.backTitle===null){return undefined;}return header.backTitle||this._getHeaderTitle(navigation);}},{key:'_getHeaderTintColor',value:function _getHeaderTintColor(navigation){var header=this.props.router.getScreenConfig(navigation,'header');if(header&&header.tintColor){return header.tintColor;}return undefined;}},{key:'_getHeaderTitleStyle',value:function _getHeaderTitleStyle(navigation){var header=this.props.router.getScreenConfig(navigation,'header');if(header&&header.titleStyle){return header.titleStyle;}return undefined;}},{key:'_renderLeft',value:function _renderLeft(

props){
return this._renderSubView(
props,
'left',
this.props.renderLeftComponent,
this._renderLeftComponent,
_HeaderStyleInterpolator2.default.forLeft);

}},{key:'_renderTitle',value:function _renderTitle(

props,options){
var style={};

if(_reactNative.Platform.OS==='android'){
if(!options.hasLeftComponent){
style.left=0;
}
if(!options.hasRightComponent){
style.right=0;
}
}

return this._renderSubView(_extends({},
props,{style:style}),
'title',
this.props.renderTitleComponent,
this._renderTitleComponent,
_HeaderStyleInterpolator2.default.forCenter);

}},{key:'_renderRight',value:function _renderRight(

props){
return this._renderSubView(
props,
'right',
this.props.renderRightComponent,
this._renderRightComponent,
_HeaderStyleInterpolator2.default.forRight);

}},{key:'_renderSubView',value:function _renderSubView(


props,
name,
renderer,
defaultRenderer,
styleInterpolator)
{var

scene=

props.scene,navigationState=props.navigationState;var

index=


scene.index,isStale=scene.isStale,key=scene.key;

var offset=navigationState.index-index;

if(Math.abs(offset)>2){


return null;
}

var subViewProps=_extends({},
props,{
onNavigateBack:this.props.onNavigateBack});


var subView=renderer(subViewProps);
if(subView===undefined){
subView=defaultRenderer(subViewProps);
}

if(subView===null){
return null;
}

var pointerEvents=offset!==0||isStale?'none':'box-none';

return(
_react2.default.createElement(_reactNative.Animated.View,{
pointerEvents:pointerEvents,
key:name+'_'+key,
style:[
styles.item,
styles[name],
props.style,
styleInterpolator(props)]},


subView));


}},{key:'_renderHeader',value:function _renderHeader(

props){
var left=this._renderLeft(props);
var right=this._renderRight(props);
var title=this._renderTitle(props,{
hasLeftComponent:!!left,
hasRightComponent:!!right});


return(
_react2.default.createElement(_reactNative.View,{
style:[_reactNative.StyleSheet.absoluteFill,styles.header],
key:'scene_'+props.scene.key},

title,
left,
right));


}},{key:'render',value:function render()

{var _this2=this;
var appBar=void 0;

if(this.props.mode==='float'){
var scenesProps=this.props.scenes.
map(function(scene,index){return _extends({},
_PropTypes2.default.extractSceneRendererProps(_this2.props),{
scene:scene,
index:index,
navigation:(0,_addNavigationHelpers2.default)(_extends({},
_this2.props.navigation,{
state:scene.route}))});});



appBar=scenesProps.map(this._renderHeader,this);
}else{
appBar=this._renderHeader(_extends({},
_PropTypes2.default.extractSceneRendererProps(this.props),{
position:new _reactNative.Animated.Value(this.props.scene.index),
progress:new _reactNative.Animated.Value(0)}));

}var _props=


this.props,scenes=_props.scenes,scene=_props.scene,style=_props.style,position=_props.position,progress=_props.progress,rest=_objectWithoutProperties(_props,['scenes','scene','style','position','progress']);

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},rest,{style:[styles.container,style]}),
_react2.default.createElement(_reactNative.View,{style:styles.appBar},
appBar)));



}}]);return Header;}(_react2.default.PureComponent);Header.HEIGHT=APPBAR_HEIGHT+STATUSBAR_HEIGHT;Header.Title=_HeaderTitle2.default;Header.BackButton=_HeaderBackButton2.default;Header.propTypes=_extends({},_PropTypes2.default.SceneRendererProps,{onNavigateBack:_react.PropTypes.func,renderLeftComponent:_react.PropTypes.func,renderRightComponent:_react.PropTypes.func,renderTitleComponent:_react.PropTypes.func,router:_react.PropTypes.object,style:_react.PropTypes.any});


var styles=_reactNative.StyleSheet.create({
container:{
paddingTop:STATUSBAR_HEIGHT,
backgroundColor:_reactNative.Platform.OS==='ios'?'#EFEFF2':'#FFF',
height:STATUSBAR_HEIGHT+APPBAR_HEIGHT,
shadowColor:'black',
shadowOpacity:0.1,
shadowRadius:_reactNative.StyleSheet.hairlineWidth,
shadowOffset:{
height:_reactNative.StyleSheet.hairlineWidth},

elevation:4},

appBar:{
flex:1},

header:{
flexDirection:'row'},

item:{
justifyContent:'center',
alignItems:'center',
backgroundColor:'transparent'},

title:{
bottom:0,
left:TITLE_OFFSET,
right:TITLE_OFFSET,
top:0,
position:'absolute',
alignItems:_reactNative.Platform.OS==='android'?
'flex-start':
'center'},

left:{
left:0,
bottom:0,
top:0,
position:'absolute'},

right:{
right:0,
bottom:0,
top:0,
position:'absolute'}});exports.default=



Header;