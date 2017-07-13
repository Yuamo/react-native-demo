import React, {Component} from 'react';
import {
  AppRegistry,
  Image,
  Button,
  StyleSheet,
  View,
  Text
} from 'react-native';



class TitleBar extends Component {
  render() {
    return (
      <View style={tbStyle.container}>
        <View style={[tbStyle.image,{marginLeft:10}]}>
          <Image  style={tbStyle.image} source={require('../Assets/Img/play.png')}/>
        </View>
        <Text style={{
          fontSize: 18,
          color: '#ffeeff'
        }}>
          {this.props.name}</Text>
        <View  style={[tbStyle.image,{marginRight:10}]}>
          <Image style={tbStyle.image} source={require('../Assets/Img/see.png')}/>
        </View>
      </View>
    );
  }
}
 

const tbStyle = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#008def',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image:{
    width:28,
    height:28
  }
});

export default TitleBar