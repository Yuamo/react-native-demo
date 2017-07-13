
import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';

class MeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({tintColor}) => (<Image
      source={require('../Assets/Img/iconfont-shipin.png')}
      style={[
      styles.icon, {
        tintColor: tintColor
      }
    ]}/>)
  };

  render() {
    return (
       <View style={{ 
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <View>
          <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
          style={styles.image} >
            
          </Image>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} >
          <Text>222</Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} >
         <Text>333</Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
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

export default MeScreen