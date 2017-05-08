'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};

var _pathToRegexp=require('path-to-regexp');var _pathToRegexp2=_interopRequireDefault(_pathToRegexp);

var _NavigationActions=require('../NavigationActions');var _NavigationActions2=_interopRequireDefault(_NavigationActions);
var _createConfigGetter=require('./createConfigGetter');var _createConfigGetter2=_interopRequireDefault(_createConfigGetter);
var _getScreenForRouteName=require('./getScreenForRouteName');var _getScreenForRouteName2=_interopRequireDefault(_getScreenForRouteName);
var _StateUtils=require('../StateUtils');var _StateUtils2=_interopRequireDefault(_StateUtils);
var _validateRouteConfigMap=require('./validateRouteConfigMap');var _validateRouteConfigMap2=_interopRequireDefault(_validateRouteConfigMap);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}















var uniqueBaseId='id-'+Date.now();
var uuidCount=0;
function _getUuid(){
return uniqueBaseId+'-'+uuidCount++;
}exports.default=

function(
routeConfigs)

{var stackConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};

(0,_validateRouteConfigMap2.default)(routeConfigs);

var childRouters={};
var routeNames=Object.keys(routeConfigs);

routeNames.forEach(function(routeName){
var screen=(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
if(screen&&screen.router){

childRouters[routeName]=screen.router;
}else{

childRouters[routeName]=null;
}
});var


initialRouteParams=
stackConfig.initialRouteParams;

var initialRouteName=stackConfig.initialRouteName||routeNames[0];

var initialChildRouter=childRouters[initialRouteName];
var paths=stackConfig.paths||{};

routeNames.forEach(function(routeName){
var pathPattern=paths[routeName]||routeConfigs[routeName].path;
var matchExact=!!pathPattern&&!childRouters[routeName];
if(!pathPattern){
pathPattern=routeName;
}
var keys=[];
var re=(0,_pathToRegexp2.default)(pathPattern,keys);
if(!matchExact){
var wildcardRe=(0,_pathToRegexp2.default)(pathPattern+'/*',keys);
re=new RegExp('(?:'+re.source+')|(?:'+wildcardRe.source+')');
}

paths[routeName]={re:re,keys:keys};
});

return{

getComponentForState:function getComponentForState(state){
var activeChildRoute=state.routes[state.index];var
routeName=activeChildRoute.routeName;
if(childRouters[routeName]){
return childRouters[routeName].getComponentForState(activeChildRoute);
}
return(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
},

getComponentForRouteName:function getComponentForRouteName(routeName){
return(0,_getScreenForRouteName2.default)(routeConfigs,routeName);
},

getStateForAction:function getStateForAction(action,state){
action=_NavigationActions2.default.mapDeprecatedActionAndWarn(action);


if(!state){
var route={};
if(action.type===_NavigationActions2.default.NAVIGATE&&childRouters[action.routeName]!==undefined){
return{
index:0,
routes:[_extends({},

action,{
type:undefined,
key:'Init'})]};



}
if(initialChildRouter){
route=initialChildRouter.getStateForAction(_NavigationActions2.default.navigate({
routeName:initialRouteName,
params:initialRouteParams}));

}
var _params=(route.params||action.params||initialRouteParams)&&_extends({},
route.params||{},
action.params||{},
initialRouteParams||{});

route=_extends({},
route,{
routeName:initialRouteName,
key:'Init'},
_params?{params:_params}:{});

state={
index:0,
routes:[route]};

}


var currentRoute=state.routes[state.index];
var childRouter=childRouters[currentRoute.routeName];
if(childRouter){
var _route=childRouter.getStateForAction(action,currentRoute);
if(_route&&_route!==currentRoute){
return _StateUtils2.default.replaceAt(state,currentRoute.key,_route);
}
}


if(action.type===_NavigationActions2.default.NAVIGATE&&childRouters[action.routeName]!==undefined){
var _childRouter=childRouters[action.routeName];
var _route2=void 0;
if(_childRouter){
var childAction=action.action||_NavigationActions2.default.init({params:action.params});
_route2=_extends({},
action,
_childRouter.getStateForAction(childAction),{
key:_getUuid(),
routeName:action.routeName});

}else{
_route2=_extends({},
action,{
key:_getUuid(),
routeName:action.routeName});

}
return _StateUtils2.default.push(state,_route2);
}

if(action.type===_NavigationActions2.default.SET_PARAMS){

var lastRoute=state.routes.find(function(route){return route.key===action.key;});
if(lastRoute){
var _params2=_extends({},
lastRoute.params,
action.params);

var routes=[].concat(_toConsumableArray(state.routes));
routes[state.routes.indexOf(lastRoute)]=_extends({},
lastRoute,{
params:_params2});

return _extends({},
state,{
routes:routes});

}
}

if(action.type===_NavigationActions2.default.RESET){
var resetAction=action;

return _extends({},
state,{
routes:resetAction.actions.map(function(action,index){
var router=childRouters[action.routeName];
if(router){
return _extends({},
action,
router.getStateForAction(action),{
routeName:action.routeName,
key:'Init'+index});

}
var route=_extends({},
action,{
key:'Init'+index});

delete route.type;
return route;
}),
index:action.index});

}

if(action.type===_NavigationActions2.default.BACK){
var backRouteIndex=null;
if(action.key){

var backRoute=state.routes.find(function(route){return route.key===action.key;});

backRouteIndex=state.routes.indexOf(backRoute);
}
if(backRouteIndex==null){
return _StateUtils2.default.pop(state);
}
if(backRouteIndex>0){
return _extends({},
state,{
routes:state.routes.slice(0,backRouteIndex),
index:backRouteIndex-1});

}
}
return state;
},

getPathAndParamsForState:function getPathAndParamsForState(state){

return{
path:''};

},

getActionForPathAndParams:function getActionForPathAndParams(pathToResolve){


if(!pathToResolve){
return _NavigationActions2.default.navigate({
routeName:initialRouteName});

}



var matchedRouteName=void 0;
var pathMatch=void 0;
var pathMatchKeys=void 0;

for(var routeName in paths){var _paths$routeName=

paths[routeName],re=_paths$routeName.re,keys=_paths$routeName.keys;
pathMatch=re.exec(pathToResolve);
if(pathMatch&&pathMatch.length){
pathMatchKeys=keys;
matchedRouteName=routeName;
break;
}
}


if(!matchedRouteName){
return null;
}





var nestedAction=void 0;
if(childRouters[matchedRouteName]){
nestedAction=childRouters[matchedRouteName].getActionForPathAndParams(

pathMatch.slice(pathMatchKeys.length).join('/'));

}




var params=pathMatch.slice(1).reduce(function(result,matchResult,i){
var key=pathMatchKeys[i];
if(key.asterisk||!key){
return result;
}
var nextResult=result||{};
var paramName=key.name;
nextResult[paramName]=matchResult;
return nextResult;
},null);

return _NavigationActions2.default.navigate(_extends({
routeName:matchedRouteName},
params?{params:params}:{},
nestedAction?{action:nestedAction}:{}));

},

getScreenConfig:(0,_createConfigGetter2.default)(routeConfigs,stackConfig.navigationOptions)};


};