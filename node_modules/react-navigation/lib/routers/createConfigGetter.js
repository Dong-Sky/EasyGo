'use strict';Object.defineProperty(exports,"__esModule",{value:true});



var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);

var _getScreenForRouteName=require('./getScreenForRouteName');var _getScreenForRouteName2=_interopRequireDefault(_getScreenForRouteName);
var _addNavigationHelpers=require('../addNavigationHelpers');var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}exports.default=









function(
routeConfigs,
defaultOptions){return(

function(
navigation,
optionName,
config)
{
var route=navigation.state;
(0,_invariant2.default)(
route.routeName&&
typeof route.routeName==='string',
'Cannot get config because the route does not have a routeName.');


var Component=(0,_getScreenForRouteName2.default)(routeConfigs,route.routeName);

var outputConfig=config||null;

if(Component.router){var
state=navigation.state,dispatch=navigation.dispatch;
(0,_invariant2.default)(
state&&state.routes&&state.index!=null,'Expect nav state to have routes and index, '+
JSON.stringify(route));

var childNavigation=(0,_addNavigationHelpers2.default)({
state:state.routes[state.index],
dispatch:dispatch});

outputConfig=Component.router.getScreenConfig(childNavigation,optionName);
}

var routeConfig=routeConfigs[route.routeName];

return[
defaultOptions,
Component.navigationOptions,
routeConfig.navigationOptions].
reduce(
function(acc,options){
if(options&&options[optionName]!==undefined){
return typeof options[optionName]==='function'?
options[optionName](navigation,acc):
options[optionName];
}
return acc;
},
outputConfig);

});};