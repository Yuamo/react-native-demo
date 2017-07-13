import React,{ Component, PropTypes }  from 'react';
import {AppRegistry, Text, View, Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
import FlexBox from './App/FlexBox'
class ChatScreen extends  Component {
  static navigationOptions = {
    title: 'Chat with Lucy'
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy{this.state}</Text>
        <FlexBox/>
      </View>
    );
  }
}

class MainScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  };
  render() {
    const {navigate} = this.props.navigation;
    return (<Button
      title="Go to Jane's profile"
      onPress={() => navigate('Profile', {name: 'Jane'})}/>);
  }
}
const App = StackNavigator({
  Home: {
    screen: MainScreen
  },
  Profile: {
    screen: ChatScreen
  }
});

export default App