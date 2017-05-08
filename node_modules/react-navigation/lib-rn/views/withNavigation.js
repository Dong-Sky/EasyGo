Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=



















withNavigation;var _react=require('react');var _react2=_interopRequireDefault(_react);var _hoistNonReactStatics=require('hoist-non-react-statics');var _hoistNonReactStatics2=_interopRequireDefault(_hoistNonReactStatics);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function withNavigation(Component){
var componentWithNavigation=function componentWithNavigation(props,_ref){var navigation=_ref.navigation;return(
_react2.default.createElement(Component,_extends({},props,{navigation:navigation})));};


componentWithNavigation.displayName='withNavigation('+(Component.displayName||Component.name)+')';

componentWithNavigation.contextTypes={
navigation:_react2.default.PropTypes.object.isRequired};


return(0,_hoistNonReactStatics2.default)(componentWithNavigation,Component);
}