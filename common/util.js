


  import React, { Component } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    Text,
    View
  } from 'react-native';

export default{
/*
请求方法postRequest
url为请求地址，param为参数字段，
successCallback为请求成功的回调函数，failedCallback为请求失败的回调函数
*/
postRequest(url,param,successCallback,failedCallback){
  fetch(url, {
method: 'post',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
},
body:param,
})
.then((response) => response.json())
.then((responseJson) => successCallback(responseJson))
.catch((error) => failedCallback(error))
},

/*
请求方法getRequest
url为请求地址，param为参数字段，
successCallback为请求成功的回调函数，failedCallback为请求失败的回调函数
*/
getRequest(url,param,successCallback,failedCallback){
  fetch(url, {
method: 'post',
headers: {
  'Content-Type': 'application/x-www-form-urlencoded',
},
body:param,
})
.then((response) => response.json())
.then((responseJson) => successCallback(responseJson))
.catch((error) => failedCallback(error))
},

}
