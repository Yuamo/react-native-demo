/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
// import App from './App/ImageTest'
import UsMoviesList from './App/Components/UsMoviesList'
import MoviesList from './App/Components/MoviesList'

class MyHomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '主页',
    // Note: By default the icon is only shown on iOS. Search the showIcon option
    // below.
    tabBarIcon: ({tintColor}) => (<Image
      source={require('./App/Img/home.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    let iconL = './App/Img/home.png'
    return (
      <View style={styles.content}>
        {/*<Button
          onPress={() => this.props.navigation.navigate('UsMovie')}
          title="Go to notifications"/>*/}
        <TitelBar name="主 页" iconL=""/>
        <MoviesList/>
      </View>
    );
  }
}


 class TitelBar extends Component  {
    render(){
      return(
        <View style={tbStyle.container}>
          <View>
              <Image source={require('./App/Img/see.png')} />
          </View>
          <Text style={{fontSize:18,color:'#ffeeff'}}> {this.props.name}</Text>
          <View>
              <Image source={require('./App/Img/see.png')} />
          </View>
        </View>
      );
    }
  }


class MyNotificationsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '北美票房',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('./App/Img/see.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
      <View style={styles.content}>
        {/*<Text style={{marginTop:200}}>我是react Navigation</Text>*/}
        <Button onPress={() => this.props.navigation.goBack()} title="返 回"/>
        <UsMoviesList/>
      </View>
    );
  }
}

class MeScreen extends Component {
 static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('./App/Img/me.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
      <View style={styles.content}>
        {/*<Text style={{marginTop:200}}>我是react Navigation</Text>*/}
        <Button onPress={() => this.props.navigation.goBack()} title="返 回"/>
        <UsMoviesList/>
      </View>
    );
  }
}

class UsMovieScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '搜索',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('./App/Img/search.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
      <View style={styles.content}>
        {/*<Text style={{marginTop:200}}>我是react Navigation</Text>*/}
        <Button onPress={() => this.props.navigation.goBack()} title="返 回"/>
        <UsMoviesList/>
      </View>
    );
  }
}

const tbStyle = StyleSheet.create({
  container:{
    height:40,
    flexDirection: 'row',
    backgroundColor: '#008def',
    justifyContent: 'space-between',
    alignItems: 'center'
  }    
});

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: 0
  }
});

const MyApp = TabNavigator({
  Home: {
    screen: MyHomeScreen
  },
  Notifications: {
    screen: MyNotificationsScreen
  },
  UsMovie: {
    screen: UsMovieScreen
  },
  Me: {
    screen: MeScreen
  }
}, {
  tabBarOptions: {
    activeTintColor: '#ffeeff', // 图标选中时显示
    inactiveTintColor :'#332233',  // 图标未选中时显示
    showIcon: true,   // 是否显示icon图标  默认不显示 **** 
    indicatorStyle: {height:0},
    pressColor: '0.3',
    labelStyle: {  // 设置label 的属性
      fontSize: 12
    },
    style: {   // 设置导航栏的样式 
      backgroundColor: '#008def',
      height: 59,
    },
  },
  initialRouteName: 'Home', // 初始装载 默认装载第一个
  tabBarPosition:'bottom',   // tabbar显示位置安卓默认 top  苹果默认bottom
  swipeEnabled: false,  // 是否允许标签之间刷卡
  lazy: true,  // 懒加载图标
});

AppRegistry.registerComponent('reapp2', () => MyApp);
