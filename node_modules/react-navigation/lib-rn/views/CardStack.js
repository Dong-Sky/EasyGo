Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');






var _Transitioner=require('./Transitioner');var _Transitioner2=_interopRequireDefault(_Transitioner);
var _Card=require('./Card');var _Card2=_interopRequireDefault(_Card);
var _CardStackStyleInterpolator=require('./CardStackStyleInterpolator');var _CardStackStyleInterpolator2=_interopRequireDefault(_CardStackStyleInterpolator);
var _CardStackPanResponder=require('./CardStackPanResponder');var _CardStackPanResponder2=_interopRequireDefault(_CardStackPanResponder);
var _Header=require('./Header');var _Header2=_interopRequireDefault(_Header);
var _PropTypes=require('../PropTypes');var _PropTypes2=_interopRequireDefault(_PropTypes);
var _NavigationActions=require('../NavigationActions');var _NavigationActions2=_interopRequireDefault(_NavigationActions);
var _addNavigationHelpers=require('../addNavigationHelpers');var _addNavigationHelpers2=_interopRequireDefault(_addNavigationHelpers);
var _SceneView=require('./SceneView');var _SceneView2=_interopRequireDefault(_SceneView);


















var _TransitionConfigs=require('./TransitionConfigs');var _TransitionConfigs2=_interopRequireDefault(_TransitionConfigs);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var NativeAnimatedModule=_reactNative.NativeModules&&_reactNative.NativeModules.NativeAnimatedModule;var




























CardStack=function(_Component){_inherits(CardStack,_Component);function CardStack(){var _ref;var _temp,_this,_ret;_classCallCheck(this,CardStack);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=CardStack.__proto__||Object.getPrototypeOf(CardStack)).call.apply(_ref,[this].concat(args))),_this),_this.


_childNavigationProps=

{},_this.



























































































_configureTransition=function(

transitionProps,

prevTransitionProps)
{
var isModal=_this.props.mode==='modal';


var transitionSpec=_extends({},
_this._getTransitionConfig(
transitionProps,
prevTransitionProps).
transitionSpec);

if(
!!NativeAnimatedModule&&

_CardStackStyleInterpolator2.default.canUseNativeDriver(isModal))
{

transitionSpec.useNativeDriver=true;
}
return transitionSpec;
},_this.




































































































































_getChildNavigation=function(
scene)
{
var navigation=_this._childNavigationProps[scene.key];
if(!navigation||navigation.state!==scene.route){
navigation=_this._childNavigationProps[scene.key]=(0,_addNavigationHelpers2.default)(_extends({},
_this.props.navigation,{
state:scene.route}));

}
return navigation;
},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(CardStack,[{key:'componentWillMount',value:function componentWillMount(){this._render=this._render.bind(this);this._renderScene=this._renderScene.bind(this);}},{key:'render',value:function render(){return _react2.default.createElement(_Transitioner2.default,{configureTransition:this._configureTransition,navigation:this.props.navigation,render:this._render,style:this.props.style,onTransitionStart:this.props.onTransitionStart,onTransitionEnd:this.props.onTransitionEnd});}},{key:'_renderHeader',value:function _renderHeader(transitionProps,headerMode){var _this2=this;var headerConfig=this.props.router.getScreenConfig(transitionProps.navigation,'header')||{};return _react2.default.createElement(this.props.headerComponent,_extends({},transitionProps,{router:this.props.router,style:headerConfig.style,mode:headerMode,onNavigateBack:function onNavigateBack(){return _this2.props.navigation.goBack(null);},renderLeftComponent:function renderLeftComponent(props){var header=_this2.props.router.getScreenConfig(props.navigation,'header')||{};return header.left;},renderRightComponent:function renderRightComponent(props){var header=_this2.props.router.getScreenConfig(props.navigation,'header')||{};return header.right;},renderTitleComponent:function renderTitleComponent(props){var header=_this2.props.router.getScreenConfig(props.navigation,'header')||{};if(typeof header.title==='string'){return undefined;}return header.title;}}));}},{key:'_render',value:function _render(props){var _this3=this;var floatingHeader=null;var headerMode=this._getHeaderMode();if(headerMode==='float'){floatingHeader=this._renderHeader(props,headerMode);}return _react2.default.createElement(_reactNative.View,{style:styles.container},_react2.default.createElement(_reactNative.View,{style:styles.scenes},props.scenes.map(function(scene){return _this3._renderScene(_extends({},props,{scene:scene,navigation:_this3._getChildNavigation(scene)}));})),floatingHeader);}},{key:'_getHeaderMode',value:function _getHeaderMode(){if(this.props.headerMode){return this.props.headerMode;}if(_reactNative.Platform.OS==='android'||this.props.mode==='modal'){return'screen';}return'float';}},{key:'_getTransitionConfig',value:function _getTransitionConfig(transitionProps,prevTransitionProps){var isModal=this.props.mode==='modal';var defaultConfig=_TransitionConfigs2.default.defaultTransitionConfig(transitionProps,prevTransitionProps,isModal);if(this.props.transitionConfig){return _extends({},defaultConfig,this.props.transitionConfig(transitionProps,prevTransitionProps,isModal));}return defaultConfig;}},{key:'_renderInnerCard',value:function _renderInnerCard(SceneComponent,props){var header=this.props.router.getScreenConfig(props.navigation,'header');var headerMode=this._getHeaderMode();if(headerMode==='screen'){var isHeaderHidden=header&&header.visible===false;var maybeHeader=isHeaderHidden?null:this._renderHeader(props,headerMode);return _react2.default.createElement(_reactNative.View,{style:styles.container},_react2.default.createElement(_reactNative.View,{style:{flex:1}},_react2.default.createElement(_SceneView2.default,{screenProps:this.props.screenProps,navigation:props.navigation,component:SceneComponent})),maybeHeader);}return _react2.default.createElement(_SceneView2.default,{screenProps:this.props.screenProps,navigation:props.navigation,component:SceneComponent});}},{key:'_renderScene',value:function _renderScene(

props){var _this4=this;
var isModal=this.props.mode==='modal';var _getTransitionConfig2=


this._getTransitionConfig(),screenInterpolator=_getTransitionConfig2.screenInterpolator;
var style=screenInterpolator&&screenInterpolator(props);

var panHandlers=null;

var cardStackConfig=this.props.router.getScreenConfig(
props.navigation,
'cardStack')||
{};



var gesturesEnabledConfig=cardStackConfig.gesturesEnabled;
var gesturesEnabled=typeof gesturesEnabledConfig==='boolean'?
gesturesEnabledConfig:
_reactNative.Platform.OS==='ios';
if(gesturesEnabled){
var onNavigateBack=null;
if(this.props.navigation.state.index!==0){
onNavigateBack=function onNavigateBack(){return _this4.props.navigation.dispatch(
_NavigationActions2.default.back({key:props.scene.route.key}));};

}
var panHandlersProps=_extends({},
props,{
onNavigateBack:onNavigateBack,
gestureResponseDistance:this.props.gestureResponseDistance});

panHandlers=isModal?
_CardStackPanResponder2.default.forVertical(panHandlersProps):
_CardStackPanResponder2.default.forHorizontal(panHandlersProps);
}

var SceneComponent=this.props.router.getComponentForRouteName(props.scene.route.routeName);

return(
_react2.default.createElement(_Card2.default,_extends({},
props,{
key:'card_'+props.scene.key,
panHandlers:panHandlers,
renderScene:function renderScene(sceneProps){return _this4._renderInnerCard(SceneComponent,sceneProps);},
style:[style,this.props.cardStyle]})));


}}]);return CardStack;}(_react.Component);CardStack.Card=_Card2.default;CardStack.Header=_Header2.default;CardStack.propTypes={cardStyle:_react.PropTypes.any,headerMode:_react.PropTypes.oneOf(['float','screen','none']),headerComponent:_react.PropTypes.func,mode:_react.PropTypes.oneOf(['card','modal']),gestureResponseDistance:_react.PropTypes.number,transitionConfig:_react.PropTypes.func,navigation:_react.PropTypes.shape({state:_PropTypes2.default.navigationState.isRequired,dispatch:_react.PropTypes.func.isRequired}).isRequired,style:_reactNative.View.propTypes.style};CardStack.defaultProps={mode:'card',headerComponent:_Header2.default};


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,




flexDirection:'column-reverse'},

scenes:{
flex:1}});exports.default=



CardStack;