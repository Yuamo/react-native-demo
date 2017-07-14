import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import MyHomeScreen from './pages/Home'
import MyNotificationsScreen from './pages/UsMovies'
import MeScreen from './pages/Me'

 /**
  * 导航栏的设置
  */
export default MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  },
  Me: {
    screen: MeScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: '#ffeeff', // 图标选中时显示
    inactiveTintColor: '#332233', // 图标未选中时显示
    showIcon: true, // 是否显示icon图标  默认不显示 ****
    indicatorStyle: {
      height: 0
    },
    pressColor: '0.3',
    labelStyle: { // 设置label 的属性
      fontSize: 12
    },
    style: { // 设置导航栏的样式
      backgroundColor: '#008def',
      height: 59,
    }
  },
  initialRouteName: 'Home', // 初始装载 默认装载第一个
  tabBarPosition: 'bottom', // tabbar显示位置安卓默认 top  苹果默认bottom
  swipeEnabled: true, // 是否允许标签之间滑动切换
  lazy: true, // 懒加载图标
});