Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _reactNative=require('react-native');




var _clamp=require('clamp');var _clamp2=_interopRequireDefault(_clamp);

var _AbstractPanResponder2=require('./AbstractPanResponder');var _AbstractPanResponder3=_interopRequireDefault(_AbstractPanResponder2);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}






var emptyFunction=function emptyFunction(){};




var ANIMATION_DURATION=250;






var POSITION_THRESHOLD=1/3;




var RESPOND_THRESHOLD=12;




var GESTURE_RESPONSE_DISTANCE=35;







var GESTURE_ANIMATED_VELOCITY_RATIO=-4;





var Directions={
HORIZONTAL:'horizontal',
VERTICAL:'vertical'};var


























CardStackPanResponder=function(_AbstractPanResponder){_inherits(CardStackPanResponder,_AbstractPanResponder);






function CardStackPanResponder(
direction,
props)
{_classCallCheck(this,CardStackPanResponder);var _this=_possibleConstructorReturn(this,(CardStackPanResponder.__proto__||Object.getPrototypeOf(CardStackPanResponder)).call(this));

_this._isResponding=false;
_this._isVertical=direction===Directions.VERTICAL;
_this._props=props;
_this._startValue=0;








_this._addNativeListener(_this._props.layout.width);
_this._addNativeListener(_this._props.layout.height);
_this._addNativeListener(_this._props.position);return _this;
}_createClass(CardStackPanResponder,[{key:'onMoveShouldSetPanResponder',value:function onMoveShouldSetPanResponder(

event,gesture){
var props=this._props;

if(props.navigationState.index!==props.scene.index){
return false;
}

var layout=props.layout;
var isVertical=this._isVertical;
var index=props.navigationState.index;
var currentDragDistance=gesture[isVertical?'dy':'dx'];
var currentDragPosition=event.nativeEvent[isVertical?'pageY':'pageX'];
var maxDragDistance=isVertical?
layout.height.__getValue():
layout.width.__getValue();

var positionMax=isVertical?
props.gestureResponseDistance:




props.gestureResponseDistance||GESTURE_RESPONSE_DISTANCE;

if(positionMax!=null&&currentDragPosition-currentDragDistance>positionMax){
return false;
}

return(
Math.abs(currentDragDistance)>RESPOND_THRESHOLD&&
maxDragDistance>0&&
index>0);

}},{key:'onPanResponderGrant',value:function onPanResponderGrant()

{var _this2=this;
this._isResponding=false;
this._props.position.stopAnimation(function(value){
_this2._isResponding=true;
_this2._startValue=value;
});
}},{key:'onPanResponderMove',value:function onPanResponderMove(

event,gesture){
if(!this._isResponding){
return;
}

var props=this._props;
var layout=props.layout;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var index=props.navigationState.index;
var distance=isVertical?
layout.height.__getValue():
layout.width.__getValue();
var currentValue=_reactNative.I18nManager.isRTL&&axis==='dx'?
this._startValue+gesture[axis]/distance:
this._startValue-gesture[axis]/distance;

var value=(0,_clamp2.default)(
index-1,
currentValue,
index);


props.position.setValue(value);
}},{key:'onPanResponderRelease',value:function onPanResponderRelease(

event,gesture){var _this3=this;
if(!this._isResponding){
return;
}

this._isResponding=false;

var props=this._props;
var isVertical=this._isVertical;
var axis=isVertical?'dy':'dx';
var velocity=gesture[isVertical?'vy':'vx'];
var index=props.navigationState.index;


props.position.stopAnimation(function(value){
if(!props.onNavigateBack){
_this3._reset(velocity);
return;
}



if(velocity<-0.5){
_this3._reset(velocity);
return;
}
if(velocity>0.5){
_this3._goBack(velocity);
return;
}



if(
value<=index-POSITION_THRESHOLD)
{
_this3._goBack(velocity);
}else{
_this3._reset(velocity);
}
});
}},{key:'onPanResponderTerminate',value:function onPanResponderTerminate()

{
this._isResponding=false;
this._reset(0);
}},{key:'onPanResponderTerminationRequest',value:function onPanResponderTerminationRequest(

event,gesture){


return false;
}},{key:'_reset',value:function _reset(

velocity){
var props=this._props;
_reactNative.Animated.spring(
props.position,
{
toValue:props.navigationState.index,
duration:ANIMATION_DURATION,
useNativeDriver:props.position.__isNative,
velocity:velocity*GESTURE_ANIMATED_VELOCITY_RATIO,
bounciness:0}).

start();
}},{key:'_goBack',value:function _goBack(

velocity){
var props=this._props;
if(!props.onNavigateBack){
return;
}
_reactNative.Animated.spring(
props.position,
{
toValue:Math.max(props.navigationState.index-1,0),
duration:ANIMATION_DURATION,
useNativeDriver:props.position.__isNative,
velocity:velocity*GESTURE_ANIMATED_VELOCITY_RATIO,
bounciness:0}).

start(props.onNavigateBack);
}},{key:'_addNativeListener',value:function _addNativeListener(

animatedValue){
if(!animatedValue.__isNative){
return;
}

if(Object.keys(animatedValue._listeners).length===0){
animatedValue.addListener(emptyFunction);
}
}}]);return CardStackPanResponder;}(_AbstractPanResponder3.default);


function createPanHandlers(
direction,
props)
{
var responder=new CardStackPanResponder(direction,props);
return responder.panHandlers;
}

function forHorizontal(
props)
{
return createPanHandlers(Directions.HORIZONTAL,props);
}

function forVertical(
props)
{
return createPanHandlers(Directions.VERTICAL,props);
}exports.default=

{

ANIMATION_DURATION:ANIMATION_DURATION,
RESPOND_THRESHOLD:RESPOND_THRESHOLD,


Directions:Directions,


forHorizontal:forHorizontal,
forVertical:forVertical};