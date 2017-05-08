var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();

var _react=require('react');var _react2=_interopRequireDefault(_react);

var _StackRouter=require('../StackRouter');var _StackRouter2=_interopRequireDefault(_StackRouter);
var _TabRouter=require('../TabRouter');var _TabRouter2=_interopRequireDefault(_TabRouter);

var _NavigationActions=require('../../NavigationActions');var _NavigationActions2=_interopRequireDefault(_NavigationActions);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var ListScreen=function ListScreen(){return _react2.default.createElement('div',null);};

var ProfileNavigator=function ProfileNavigator(){return _react2.default.createElement('div',null);};
ProfileNavigator.router=(0,_StackRouter2.default)({
list:{
path:'list/:id',
screen:ListScreen}});



var MainNavigator=function MainNavigator(){return _react2.default.createElement('div',null);};
MainNavigator.router=(0,_StackRouter2.default)({
profile:{
path:'p/:id',
screen:ProfileNavigator}});



var LoginScreen=function LoginScreen(){return _react2.default.createElement('div',null);};

var AuthNavigator=function AuthNavigator(){return _react2.default.createElement('div',null);};
AuthNavigator.router=(0,_StackRouter2.default)({
login:{
screen:LoginScreen}});



var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};var

FooNavigator=function(_React$Component){_inherits(FooNavigator,_React$Component);function FooNavigator(){_classCallCheck(this,FooNavigator);return _possibleConstructorReturn(this,(FooNavigator.__proto__||Object.getPrototypeOf(FooNavigator)).apply(this,arguments));}_createClass(FooNavigator,[{key:'render',value:function render()






{
return _react2.default.createElement('div',null);
}}]);return FooNavigator;}(_react2.default.Component);FooNavigator.router=(0,_StackRouter2.default)({bar:{path:'b/:barThing',screen:BarScreen}});


var PersonScreen=function PersonScreen(){return _react2.default.createElement('div',null);};

var TestStackRouter=(0,_StackRouter2.default)({
main:{
screen:MainNavigator},

auth:{
screen:AuthNavigator},

person:{
path:'people/:id',
screen:PersonScreen},

foo:{
path:'fo/:fooThing',
screen:FooNavigator}});



describe('StackRouter',function(){
test('Gets the active screen for a given state',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
foo:{
screen:FooScreen},

bar:{
screen:BarScreen}});



expect(router.getComponentForState({
index:0,
routes:[
{key:'a',routeName:'foo'},
{key:'b',routeName:'bar'},
{key:'c',routeName:'foo'}]})).

toBe(FooScreen);
expect(router.getComponentForState({
index:1,
routes:[
{key:'a',routeName:'foo'},
{key:'b',routeName:'bar'}]})).

toBe(BarScreen);
});

test('Handles getScreen in getComponentForState',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
foo:{
getScreen:function getScreen(){return FooScreen;}},

bar:{
getScreen:function getScreen(){return BarScreen;}}});



expect(router.getComponentForState({
index:0,
routes:[
{key:'a',routeName:'foo'},
{key:'b',routeName:'bar'},
{key:'c',routeName:'foo'}]})).

toBe(FooScreen);
expect(router.getComponentForState({
index:1,
routes:[
{key:'a',routeName:'foo'},
{key:'b',routeName:'bar'}]})).

toBe(BarScreen);
});

test('Gets the screen for given route',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function(_React$Component2){_inherits(BarScreen,_React$Component2);function BarScreen(){_classCallCheck(this,BarScreen);return _possibleConstructorReturn(this,(BarScreen.__proto__||Object.getPrototypeOf(BarScreen)).apply(this,arguments));}_createClass(BarScreen,[{key:'render',value:function render(){return _react2.default.createElement('div',null);}}]);return BarScreen;}(_react2.default.Component);
var BazScreen=_react2.default.createClass({displayName:'BazScreen',render:function render(){return _react2.default.createElement('div',null);}});
var router=(0,_StackRouter2.default)({
foo:{
screen:FooScreen},

bar:{
screen:BarScreen},

baz:{
screen:BazScreen}});



expect(router.getComponentForRouteName('foo')).toBe(FooScreen);
expect(router.getComponentForRouteName('bar')).toBe(BarScreen);
expect(router.getComponentForRouteName('baz')).toBe(BazScreen);
});

test('Handles getScreen in getComponent',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function(_React$Component3){_inherits(BarScreen,_React$Component3);function BarScreen(){_classCallCheck(this,BarScreen);return _possibleConstructorReturn(this,(BarScreen.__proto__||Object.getPrototypeOf(BarScreen)).apply(this,arguments));}_createClass(BarScreen,[{key:'render',value:function render(){return _react2.default.createElement('div',null);}}]);return BarScreen;}(_react2.default.Component);
var BazScreen=_react2.default.createClass({displayName:'BazScreen',render:function render(){return _react2.default.createElement('div',null);}});
var router=(0,_StackRouter2.default)({
foo:{
getScreen:function getScreen(){return FooScreen;}},

bar:{
getScreen:function getScreen(){return BarScreen;}},

baz:{
getScreen:function getScreen(){return BazScreen;}}});



expect(router.getComponentForRouteName('foo')).toBe(FooScreen);
expect(router.getComponentForRouteName('bar')).toBe(BarScreen);
expect(router.getComponentForRouteName('baz')).toBe(BazScreen);
});

test('Parses simple paths',function(){
expect(AuthNavigator.router.getActionForPathAndParams('login')).toEqual({
type:_NavigationActions2.default.NAVIGATE,
routeName:'login'});

});

test('Parses paths with a param',function(){
expect(TestStackRouter.getActionForPathAndParams('people/foo')).toEqual({
type:_NavigationActions2.default.NAVIGATE,
routeName:'person',
params:{
id:'foo'}});


});


test('Correctly parses a path without arguments into an action chain',function(){
var uri='auth/login';
var action=TestStackRouter.getActionForPathAndParams(uri);
expect(action).toEqual({
type:_NavigationActions2.default.NAVIGATE,
routeName:'auth',
action:{
type:_NavigationActions2.default.NAVIGATE,
routeName:'login'}});


});

test('Correctly parses a path with arguments into an action chain',function(){
var uri='main/p/4/list/10259959195';
var action=TestStackRouter.getActionForPathAndParams(uri);
expect(action).toEqual({
type:_NavigationActions2.default.NAVIGATE,
routeName:'main',
action:{
type:_NavigationActions2.default.NAVIGATE,
routeName:'profile',
params:{
id:'4'},

action:{
type:_NavigationActions2.default.NAVIGATE,
routeName:'list',
params:{
id:'10259959195'}}}});




});

test('Correctly returns null action for non-existent path',function(){
var uri='asdf/1234';
var action=TestStackRouter.getActionForPathAndParams(uri);
expect(action).toEqual(null);
});

test('Correctly returns action chain for partially matched path',function(){
var uri='auth/login/2';
var action=TestStackRouter.getActionForPathAndParams(uri);
expect(action).toEqual({
type:_NavigationActions2.default.NAVIGATE,
routeName:'auth',
action:{
type:_NavigationActions2.default.NAVIGATE,
routeName:'login'}});


});

test('Correctly returns action for path with multiple parameters',function(){
var path='fo/22/b/hello';
var action=TestStackRouter.getActionForPathAndParams(path);
expect(action).toEqual({
type:_NavigationActions2.default.NAVIGATE,
routeName:'foo',
params:{
fooThing:'22'},

action:{
type:_NavigationActions2.default.NAVIGATE,
routeName:'bar',
params:{
barThing:'hello'}}});



});

test('Handle basic stack logic for plain components',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
Foo:{
screen:FooScreen},

Bar:{
screen:BarScreen}});


var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
expect(state).toEqual({
index:0,
routes:[
{
key:'Init',
routeName:'Foo'}]});



var state2=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{name:'Zoom'}},state);
expect(state2&&state2.index).toEqual(1);
expect(state2&&state2.routes[1].routeName).toEqual('Bar');
expect(state2&&state2.routes[1].params).toEqual({name:'Zoom'});
expect(state2&&state2.routes.length).toEqual(2);
var state3=router.getStateForAction({type:_NavigationActions2.default.BACK},state2);
expect(state3).toEqual({
index:0,
routes:[
{
key:'Init',
routeName:'Foo'}]});



});

test('Handle basic stack logic for components with router',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
BarScreen.router=(0,_StackRouter2.default)({
Xyz:{
screen:function screen(){return null;}}});


var router=(0,_StackRouter2.default)({
Foo:{
screen:FooScreen},

Bar:{
screen:BarScreen}});


var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
expect(state).toEqual({
index:0,
routes:[
{
key:'Init',
routeName:'Foo'}]});



var state2=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{name:'Zoom'}},state);
expect(state2&&state2.index).toEqual(1);
expect(state2&&state2.routes[1].routeName).toEqual('Bar');
expect(state2&&state2.routes[1].params).toEqual({name:'Zoom'});
expect(state2&&state2.routes.length).toEqual(2);
var state3=router.getStateForAction({type:_NavigationActions2.default.BACK},state2);
expect(state3).toEqual({
index:0,
routes:[
{
key:'Init',
routeName:'Foo'}]});



});

test('Handle goBack identified by key',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
Foo:{
screen:FooScreen},

Bar:{
screen:BarScreen}});


var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{name:'Zoom'}},state);
var state3=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{name:'Foo'}},state2);
var state4=router.getStateForAction({type:_NavigationActions2.default.BACK,key:'wrongKey'},state3);
expect(state3).toEqual(state4);
var state5=router.getStateForAction({type:_NavigationActions2.default.BACK,key:state3&&state3.routes[1].key},state4);
expect(state5).toEqual(state);
});

test('Handle initial route navigation',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
Foo:{
screen:FooScreen},

Bar:{
screen:BarScreen}},

{initialRouteName:'Bar'});
var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
expect(state).toEqual({
index:0,
routes:[
{
key:'Init',
routeName:'Bar'}]});



});

test('Initial route params appear in nav state',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
Foo:{
screen:FooScreen}},

{initialRouteName:'Bar',initialRouteParams:{foo:'bar'}});
var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
expect(state).toEqual({
index:0,
routes:[
{
key:'Init',
routeName:'Bar',
params:{foo:'bar'}}]});



});

test('Action params appear in nav state',function(){
var FooScreen=function FooScreen(){return _react2.default.createElement('div',null);};
var BarScreen=function BarScreen(){return _react2.default.createElement('div',null);};
var router=(0,_StackRouter2.default)({
Foo:{
screen:FooScreen},

Bar:{
screen:BarScreen}});


var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{bar:'42'}},state);
expect(state2).not.toBeNull();
expect(state2&&state2.index).toEqual(1);
expect(state2&&state2.routes[1].params).toEqual({bar:'42'});
});

test('Handles the SetParams action',function(){
var router=(0,_StackRouter2.default)({
Foo:{
screen:function screen(){return _react2.default.createElement('div',null);}},

Bar:{
screen:function screen(){return _react2.default.createElement('div',null);}}},

{
initialRouteName:'Bar',
initialRouteParams:{name:'Zoo'}});

var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({
type:_NavigationActions2.default.SET_PARAMS,
params:{name:'Qux'},
key:'Init'},
state);
expect(state2&&state2.index).toEqual(0);
expect(state2&&state2.routes[0].params).toEqual({name:'Qux'});
});

test('Handles the reset action',function(){
var router=(0,_StackRouter2.default)({
Foo:{
screen:function screen(){return _react2.default.createElement('div',null);}},

Bar:{
screen:function screen(){return _react2.default.createElement('div',null);}}});


var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({type:_NavigationActions2.default.RESET,actions:[{type:_NavigationActions2.default.NAVIGATE,routeName:'Foo',params:{bar:'42'}},{type:_NavigationActions2.default.NAVIGATE,routeName:'Bar'}],index:1},state);
expect(state2&&state2.index).toEqual(1);
expect(state2&&state2.routes[0].params).toEqual({bar:'42'});
expect(state2&&state2.routes[0].routeName).toEqual('Foo');
expect(state2&&state2.routes[1].routeName).toEqual('Bar');
});

test('Handles the reset action with nested Router',function(){
var ChildRouter=(0,_TabRouter2.default)({
baz:{
screen:function screen(){return _react2.default.createElement('div',null);}}});



var ChildNavigator=function ChildNavigator(){return _react2.default.createElement('div',null);};
ChildNavigator.router=ChildRouter;

var router=(0,_StackRouter2.default)({
Foo:{
screen:ChildNavigator},

Bar:{
screen:function screen(){return _react2.default.createElement('div',null);}}});


var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({type:_NavigationActions2.default.RESET,actions:[{type:_NavigationActions2.default.NAVIGATE,routeName:'Foo'}],index:0},state);

expect(state2&&state2.index).toEqual(0);
expect(state2&&state2.routes[0].routeName).toEqual('Foo');

expect(state2&&state2.routes[0].routes[0].routeName).toEqual('baz');
});

test('Handles the navigate action with params and nested StackRouter',function(){
var ChildNavigator=function ChildNavigator(){return _react2.default.createElement('div',null);};
ChildNavigator.router=(0,_StackRouter2.default)({Baz:{screen:function screen(){return _react2.default.createElement('div',null);}}});

var router=(0,_StackRouter2.default)({
Foo:{screen:function screen(){return _react2.default.createElement('div',null);}},
Bar:{screen:ChildNavigator}});

var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{foo:'42'}},state);
expect(state2&&state2.routes[1].params).toEqual({foo:'42'});

expect(state2&&state2.routes[1].routes).toEqual([
{
key:'Init',
routeName:'Baz',
params:{foo:'42'}}]);


});

test('Handles the navigate action with params and nested TabRouter',function(){
var ChildNavigator=function ChildNavigator(){return _react2.default.createElement('div',null);};
ChildNavigator.router=(0,_TabRouter2.default)({
Baz:{screen:function screen(){return _react2.default.createElement('div',null);}},
Boo:{screen:function screen(){return _react2.default.createElement('div',null);}}});


var router=(0,_StackRouter2.default)({
Foo:{screen:function screen(){return _react2.default.createElement('div',null);}},
Bar:{screen:ChildNavigator}});

var state=router.getStateForAction({type:_NavigationActions2.default.INIT});
var state2=router.getStateForAction({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar',params:{foo:'42'}},state);
expect(state2&&state2.routes[1].params).toEqual({foo:'42'});

expect(state2&&state2.routes[1].routes).toEqual([
{
key:'Baz',
routeName:'Baz',
params:{foo:'42'}},

{
key:'Boo',
routeName:'Boo',
params:{foo:'42'}}]);


});

test('Handles empty URIs',function(){
var router=(0,_StackRouter2.default)({
Foo:{
screen:function screen(){return _react2.default.createElement('div',null);}},

Bar:{
screen:function screen(){return _react2.default.createElement('div',null);}}},

{initialRouteName:'Bar'});
var action=router.getActionForPathAndParams('');
expect(action).toEqual({type:_NavigationActions2.default.NAVIGATE,routeName:'Bar'});
var state=null;
if(action){
state=router.getStateForAction(action);
}
expect(state&&state.index).toEqual(0);
expect(state&&state.routes[0]).toEqual({key:'Init',routeName:'Bar'});
});

test('Maps old actions (uses "Handles the reset action" test)',function(){
var router=(0,_StackRouter2.default)({
Foo:{
screen:function screen(){return _react2.default.createElement('div',null);}},

Bar:{
screen:function screen(){return _react2.default.createElement('div',null);}}});



var state=router.getStateForAction({type:'Init'});

var state2=router.getStateForAction({type:'Reset',actions:[{type:'Navigate',routeName:'Foo',params:{bar:'42'}},{type:'Navigate',routeName:'Bar'}],index:1},state);
expect(state2&&state2.index).toEqual(1);
expect(state2&&state2.routes[0].params).toEqual({bar:'42'});
expect(state2&&state2.routes[0].routeName).toEqual('Foo');
expect(state2&&state2.routes[1].routeName).toEqual('Bar');
});
});