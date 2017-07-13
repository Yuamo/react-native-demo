import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';
class pageDetail extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <View style={styles.content}>
        <Text></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: 0
  },
  icon: {
    width: 24,
    height: 24,
  },
});
export default defaultClass
