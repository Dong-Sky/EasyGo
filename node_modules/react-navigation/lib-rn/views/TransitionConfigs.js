Object.defineProperty(exports,"__esModule",{value:true});







var _CardStackStyleInterpolator=require('./CardStackStyleInterpolator');var _CardStackStyleInterpolator2=_interopRequireDefault(_CardStackStyleInterpolator);
var _HeaderStyleInterpolator=require('./HeaderStyleInterpolator');var _HeaderStyleInterpolator2=_interopRequireDefault(_HeaderStyleInterpolator);

var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}

















var DefaultTransitionSpec={

duration:250,
timing:_reactNative.Animated.spring,
bounciness:0,
speed:9};



var SlideFromRightIOS={
screenInterpolator:_CardStackStyleInterpolator2.default.forHorizontal};



var ModalSlideFromBottomIOS={
screenInterpolator:_CardStackStyleInterpolator2.default.forVertical};



var FadeInFromBottomAndroid={

transitionSpec:{
duration:350,
easing:_reactNative.Easing.out(_reactNative.Easing.poly(5)),
timing:_reactNative.Animated.timing},

screenInterpolator:_CardStackStyleInterpolator2.default.forFadeFromBottomAndroid};



var FadeOutToBottomAndroid={

transitionSpec:{
duration:230,
easing:_reactNative.Easing.in(_reactNative.Easing.poly(4)),
timing:_reactNative.Animated.timing},

screenInterpolator:_CardStackStyleInterpolator2.default.forFadeFromBottomAndroid};


function defaultTransitionConfig(

transitionProps,

prevTransitionProps,

isModal)
{
if(_reactNative.Platform.OS==='android'){


if(prevTransitionProps&&transitionProps.index<prevTransitionProps.index){

return FadeOutToBottomAndroid;
}
return FadeInFromBottomAndroid;
}else{

if(isModal){
return ModalSlideFromBottomIOS;
}else{
return SlideFromRightIOS;
}
}
}exports.default=

{
DefaultTransitionSpec:DefaultTransitionSpec,
defaultTransitionConfig:defaultTransitionConfig};