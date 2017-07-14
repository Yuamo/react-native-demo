import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';
import MoviesList from '../Components/MoviesList'
import TitleBar from '../Components/TitleBar'
import {StackNavigator, TabNavigator} from 'react-navigation';

class MyHomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '主页',
    // Note: By default the icon is only shown on iOS. Search the showIcon option
    // below.
    tabBarIcon: ({tintColor}) => (<Image
      source={require('../Assets/Img/home.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
      <View style={styles.content}>
        {/*<Button
          onPress={() => this.props.navigation.navigate('UsMovie')}
          title="Go to notifications"/>*/}
        <TitleBar name="主 页" />
        <Button
        onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
        title="Go to Lucy's profile"
        />
        <MoviesList/>
      </View>
    );
  }
}



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



class PageDetail extends React.Component {
   static navigationOptions = {
    tabBarLabel: '主页',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('../Assets/Img/home.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Home', {name: 'Lucy'})}
        title="Go to Lucy's profile"
      />
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Profile: {
    path: 'people/:name',
    screen: PageDetail,
  },
},{
  navigationOptions:{  // 当行图样式设置
    title: '1',
    headerTitle :'2',
    visible:true,
    headerBackTitle: '3',
    headerTintColor :'red',  
  },
  headerMode:'none', // 显示导航头
  mode: 'card',
});

export default ModalStack