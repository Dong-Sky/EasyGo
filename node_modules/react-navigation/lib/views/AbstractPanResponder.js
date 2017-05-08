'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _reactNative=require('react-native');



var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}





var EmptyPanHandlers={
onMoveShouldSetPanResponder:null,
onPanResponderGrant:null,
onPanResponderMove:null,
onPanResponderRelease:null,
onPanResponderTerminate:null,
onPanResponderTerminationRequest:null};var






AbstractPanResponder=



function AbstractPanResponder(){var _this=this;_classCallCheck(this,AbstractPanResponder);
var config={};
Object.keys(EmptyPanHandlers).forEach(function(name){
var fn=_this[name];

(0,_invariant2.default)(
typeof fn==='function',
'subclass of `NavigationAbstractPanResponder` must implement method %s',
name);


config[name]=fn.bind(_this);
},this);

this.panHandlers=_reactNative.PanResponder.create(config).panHandlers;
};exports.default=AbstractPanResponder;