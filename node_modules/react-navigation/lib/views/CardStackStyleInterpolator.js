'use strict';Object.defineProperty(exports,"__esModule",{value:true});

var _reactNative=require('react-native');

























function forInitial(props){var

navigationState=

props.navigationState,scene=props.scene;

var focused=navigationState.index===scene.index;
var opacity=focused?1:0;

var translate=focused?0:1000000;
return{
opacity:opacity,
transform:[
{translateX:translate},
{translateY:translate}]};


}




function forHorizontal(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];



var width=layout.initWidth+30;
var outputRange=_reactNative.I18nManager.isRTL?
[-width,0,10,10]:
[width,0,-10,-10];


var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3,0]});


var translateY=0;
var translateX=position.interpolate({
inputRange:inputRange,
outputRange:outputRange});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}




function forVertical(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];
var height=layout.initHeight;

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[1,1,0.3,0]});


var translateX=0;
var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[height,0,0,0]});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}




function forFadeFromBottomAndroid(props){var

layout=


props.layout,position=props.position,scene=props.scene;

if(!layout.isMeasured){
return forInitial(props);
}

var index=scene.index;
var inputRange=[index-1,index,index+0.99,index+1];
var height=layout.initHeight;

var opacity=position.interpolate({
inputRange:inputRange,
outputRange:[0,1,1,0]});


var translateX=0;
var translateY=position.interpolate({
inputRange:inputRange,
outputRange:[50,0,0,0]});


return{
opacity:opacity,
transform:[
{translateX:translateX},
{translateY:translateY}]};


}

function canUseNativeDriver(isVertical){



return true;
}exports.default=

{
forHorizontal:forHorizontal,
forVertical:forVertical,
forFadeFromBottomAndroid:forFadeFromBottomAndroid,
canUseNativeDriver:canUseNativeDriver};