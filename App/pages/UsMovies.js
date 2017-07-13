import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';
import UsMoviesList from '../Components/UsMoviesList'
import TitleBar from '../Components/TitleBar'
 

class MyNotificationsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '北美票房',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('../Assets/Img/iconfont-xingxing.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
      <View style={styles.content}>
        {/*<Button onPress={() => this.props.navigation.goBack()} title="返 回"/>*/}
          <TitleBar name="北美票房榜" />
        <UsMoviesList/>
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

export default MyNotificationsScreen
