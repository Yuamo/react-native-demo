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
        <TitleBar name="主 页" fl="../Assets/Img/home.png"/>
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

export default MyHomeScreen