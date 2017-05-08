Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.default=

























createNavigationContainer;var _react=require('react');var _react2=_interopRequireDefault(_react);var _invariant=require('fbjs/lib/invariant');var _invariant2=_interopRequireDefault(_invariant);var _PlatformHelpers=require('./PlatformHelpers');var _NavigationActions=require('./NavigationActions');var _NavigationActions2=_interopRequireDefault(_NavigationActions);var _addNavigationHelpers=require('./addNavigationHelpers');var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function createNavigationContainer(
Component,
containerConfig)
{









function urlToPathAndParams(url){
var params={};
var URIPrefix=containerConfig&&containerConfig.URIPrefix;
var delimiter=URIPrefix||'://';
var path=url.split(delimiter)[1];
if(!path){
path=url;
}
return{
path:path,
params:params};

}var

NavigationContainer=function(_React$Component){_inherits(NavigationContainer,_React$Component);
























function NavigationContainer(props){_classCallCheck(this,NavigationContainer);var _this=_possibleConstructorReturn(this,(NavigationContainer.__proto__||Object.getPrototypeOf(NavigationContainer)).call(this,
props));_this.subs=null;_this._isStateful=function(){var hasNavProp=!!_this.props.navigation;if(hasNavProp){(0,_invariant2.default)(!containerConfig,'This navigator has a container config AND a navigation prop, so it is '+'unclear if it should own its own state. Remove the containerConfig '+'if the navigator should get its state from the navigation prop. If the '+'navigator should maintain its own state, do not pass a navigation prop.');return false;}return true;};_this.
















































_handleOpenURL=function(_ref){var url=_ref.url;
console.log('Handling URL:',url);
var parsedUrl=urlToPathAndParams(url);
if(parsedUrl){var
path=parsedUrl.path,params=parsedUrl.params;
var action=Component.router.getActionForPathAndParams(path,params);
if(action){
_this.dispatch(action);
}
}
};_this.

dispatch=function(action){var
state=_this.state;
if(!_this._isStateful()){
return false;
}
var nav=Component.router.getStateForAction(action,state.nav);

if(nav&&nav!==state.nav){
if(console.group){
console.group('Navigation Dispatch: ');
console.log('Action: ',action);
console.log('New State: ',nav);
console.log('Last State: ',state.nav);
console.groupEnd();
}else{
console.log('Navigation Dispatch: ',{action:action,newState:nav,lastState:state.nav});
}
_this.setState({nav:nav});
return true;
}
return false;
};_this.state={nav:_this._isStateful()?Component.router.getStateForAction(_NavigationActions2.default.init()):null};return _this;}_createClass(NavigationContainer,[{key:'componentDidMount',value:function componentDidMount(){var _this2=this;if(this._isStateful()){this.subs=_PlatformHelpers.BackAndroid.addEventListener('backPress',function(){return _this2.dispatch(_NavigationActions2.default.back());});_PlatformHelpers.Linking.addEventListener('url',this._handleOpenURL);_PlatformHelpers.Linking.getInitialURL().then(function(url){if(url){console.log('Handling URL:',url);var parsedUrl=urlToPathAndParams(url);if(parsedUrl){var path=parsedUrl.path,params=parsedUrl.params;var action=Component.router.getActionForPathAndParams(path,params);if(action){_this2.dispatch(action);}}}});}}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){var _ref2=this._isStateful()?[prevState.nav,this.state.nav]:[prevProps.navigation.state,this.props.navigation.state],_ref3=_slicedToArray(_ref2,2),prevNavigationState=_ref3[0],navigationState=_ref3[1];if(prevNavigationState!==navigationState&&typeof this.props.onNavigationStateChange==='function'){this.props.onNavigationStateChange(prevNavigationState,navigationState);}}},{key:'componentWillUnmount',value:function componentWillUnmount(){_PlatformHelpers.Linking.removeEventListener('url',this._handleOpenURL);this.subs&&this.subs.remove();}},{key:'render',value:function render()



{
var navigation=this.props.navigation;
if(this._isStateful()){
if(!this._navigation||this._navigation.state!==this.state.nav){
this._navigation=(0,_addNavigationHelpers2.default)({
dispatch:this.dispatch.bind(this),
state:this.state.nav});

}
navigation=this._navigation;
}
return(
_react2.default.createElement(Component,_extends({},
this.props,{
navigation:navigation})));


}}]);return NavigationContainer;}(_react2.default.Component);NavigationContainer.router=Component.router;


return NavigationContainer;
}