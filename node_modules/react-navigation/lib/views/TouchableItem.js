'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();










var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}









var ANDROID_VERSION_LOLLIPOP=21;var















TouchableItem=function(_Component){_inherits(TouchableItem,_Component);function TouchableItem(){_classCallCheck(this,TouchableItem);return _possibleConstructorReturn(this,(TouchableItem.__proto__||Object.getPrototypeOf(TouchableItem)).apply(this,arguments));}_createClass(TouchableItem,[{key:'render',value:function render()














{








if(_reactNative.Platform.OS==='android'&&_reactNative.Platform.Version>=ANDROID_VERSION_LOLLIPOP){var _props=
this.props,_style=_props.style,rest=_objectWithoutProperties(_props,['style']);

return(
_react2.default.createElement(_reactNative.TouchableNativeFeedback,_extends({},
rest,{
style:null,
background:
_reactNative.TouchableNativeFeedback.Ripple(
this.props.pressColor,
this.props.borderless)}),



_react2.default.createElement(_reactNative.View,{style:this.props.style},
_react.Children.only(this.props.children))));



}

return(
_react2.default.createElement(_reactNative.TouchableOpacity,this.props,
this.props.children));


}}]);return TouchableItem;}(_react.Component);TouchableItem.propTypes={onPress:_react.PropTypes.func,delayPressIn:_react.PropTypes.number,borderless:_react.PropTypes.bool,pressColor:_react.PropTypes.string,activeOpacity:_react.PropTypes.number,children:_react.PropTypes.node.isRequired,style:_reactNative.View.propTypes.style};TouchableItem.defaultProps={pressColor:'rgba(0, 0, 0, .32)'};exports.default=TouchableItem;