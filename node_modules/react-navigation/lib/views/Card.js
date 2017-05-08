'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _reactNative=require('react-native');




var _CardStackPanResponder=require('./CardStackPanResponder');var _CardStackPanResponder2=_interopRequireDefault(_CardStackPanResponder);
var _CardStackStyleInterpolator=require('./CardStackStyleInterpolator');var _CardStackStyleInterpolator2=_interopRequireDefault(_CardStackStyleInterpolator);
var _PointerEventsContainer=require('./PointerEventsContainer');var _PointerEventsContainer2=_interopRequireDefault(_PointerEventsContainer);
var _PropTypes=require('../PropTypes');var _PropTypes2=_interopRequireDefault(_PropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var



















Card=function(_React$Component){_inherits(Card,_React$Component);function Card(){_classCallCheck(this,Card);return _possibleConstructorReturn(this,(Card.__proto__||Object.getPrototypeOf(Card)).apply(this,arguments));}_createClass(Card,[{key:'render',value:function render()












{var _props=






this.props,panHandlers=_props.panHandlers,pointerEvents=_props.pointerEvents,renderScene=_props.renderScene,style=_props.style,props=_objectWithoutProperties(_props,['panHandlers','pointerEvents','renderScene','style']);

var viewStyle=style===undefined?
_CardStackStyleInterpolator2.default.forHorizontal(props):
style;

var viewPanHandlers=panHandlers===undefined?
_CardStackPanResponder2.default.forHorizontal(_extends({},
props,{
onNavigateBack:this.props.onNavigateBack})):

panHandlers;

return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},
viewPanHandlers,{
pointerEvents:pointerEvents,
ref:this.props.onComponentRef,
style:[styles.main,viewStyle]}),

renderScene(props)));


}}]);return Card;}(_react2.default.Component);Card.propTypes=_extends({},_PropTypes2.default.SceneRendererProps,{onComponentRef:_react.PropTypes.func.isRequired,onNavigateBack:_react.PropTypes.func,panHandlers:_PropTypes2.default.panHandlers,pointerEvents:_react.PropTypes.string.isRequired,renderScene:_react.PropTypes.func.isRequired,style:_react.PropTypes.any});


var styles=_reactNative.StyleSheet.create({
main:{
backgroundColor:'#E9E9EF',
bottom:0,
left:0,
position:'absolute',
right:0,
shadowColor:'black',
shadowOffset:{width:0,height:0},
shadowOpacity:0.4,
shadowRadius:10,
top:0}});



Card=(0,_PointerEventsContainer2.default)(Card);

Card.CardStackPanResponder=_CardStackPanResponder2.default;
Card.CardStackStyleInterpolator=_CardStackStyleInterpolator2.default;exports.default=

Card;