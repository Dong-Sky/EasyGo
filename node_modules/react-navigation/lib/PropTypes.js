'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _react=require('react');
var _reactNative=require('react-native');















var action=_react.PropTypes.shape({
type:_react.PropTypes.string.isRequired});



var animatedValue=_react.PropTypes.instanceOf(_reactNative.Animated.Value);


var navigationRoute=_react.PropTypes.shape({
key:_react.PropTypes.string.isRequired});



var navigationState=_react.PropTypes.shape({
index:_react.PropTypes.number.isRequired,
routes:_react.PropTypes.arrayOf(navigationRoute)});



var layout=_react.PropTypes.shape({
height:animatedValue,
initHeight:_react.PropTypes.number.isRequired,
initWidth:_react.PropTypes.number.isRequired,
isMeasured:_react.PropTypes.bool.isRequired,
width:animatedValue});



var scene=_react.PropTypes.shape({
index:_react.PropTypes.number.isRequired,
isActive:_react.PropTypes.bool.isRequired,
isStale:_react.PropTypes.bool.isRequired,
key:_react.PropTypes.string.isRequired,
route:navigationRoute.isRequired});



var SceneRendererProps={
layout:layout.isRequired,
navigationState:navigationState.isRequired,
navigation:_react.PropTypes.object,
position:animatedValue.isRequired,
progress:animatedValue.isRequired,
scene:scene.isRequired,
scenes:_react.PropTypes.arrayOf(scene).isRequired};


var SceneRenderer=_react.PropTypes.shape(SceneRendererProps);


var panHandlers=_react.PropTypes.shape({
onMoveShouldSetResponder:_react.PropTypes.func.isRequired,
onMoveShouldSetResponderCapture:_react.PropTypes.func.isRequired,
onResponderEnd:_react.PropTypes.func.isRequired,
onResponderGrant:_react.PropTypes.func.isRequired,
onResponderMove:_react.PropTypes.func.isRequired,
onResponderReject:_react.PropTypes.func.isRequired,
onResponderRelease:_react.PropTypes.func.isRequired,
onResponderStart:_react.PropTypes.func.isRequired,
onResponderTerminate:_react.PropTypes.func.isRequired,
onResponderTerminationRequest:_react.PropTypes.func.isRequired,
onStartShouldSetResponder:_react.PropTypes.func.isRequired,
onStartShouldSetResponderCapture:_react.PropTypes.func.isRequired});





function extractSceneRendererProps(
props)
{
return{
index:props.index,
layout:props.layout,
navigationState:props.navigationState,
position:props.position,
progress:props.progress,
scene:props.scene,
navigation:props.navigation,
scenes:props.scenes};

}exports.default=

{

extractSceneRendererProps:extractSceneRendererProps,


SceneRendererProps:SceneRendererProps,


SceneRenderer:SceneRenderer,
action:action,
navigationState:navigationState,
navigationRoute:navigationRoute,
panHandlers:panHandlers};