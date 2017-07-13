'user strict'

import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ListView
} from 'react-native';
import MoviesList  from './Components/UsMoviesList'

class App extends Component {
  
 
  render() { 
    return (
      <View style={styles.content}>
        <MoviesList/>
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
  }
});

export default App