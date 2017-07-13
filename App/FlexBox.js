import React, {Component, PropTypes} from 'react';
import {Text, View, Button,Image,StyleSheet} from 'react-native';

export default class flexBox extends Component {
  render() {
    return (
     // Try setting `flexDirection` to `column`.
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
  overlay:{
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  image: {
    width:50,
    height:50
  },
  backgroundImage:{
    flex:1,
    resizeMode: Image.resizeMode.contain
  }
});