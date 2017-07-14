'user strict'

import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
  ListView,
  ActivityIndicator,
  TouchableHighlight,
  TouchableOpacity,
  Alert
} from 'react-native';
import getMoviesFromApi from './ajaxUtil'


class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      flag: false
    }
  }

  async componentWillMount() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 != row2
    });
    let movies = await getMoviesFromApi('https://api.douban.com/v2/movie/us_box')
    console.log(movies)
    this.setState({
      movies: dataSource.cloneWithRows(movies)
    })
     this.setState({'flag': true})
  }


  componentDidMount() {
    this.timer = setTimeout(() => {
      // this.setState({'flag': true})
      console.log('把一个定时器的引用挂在this上');
    }, 1000);
  }
  componentWillUnmount() {
    // 请注意Un"m"ount的m是小写 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }

  _onPressButton=()=>{
  }

movieList(movie) {
    return (
      <TouchableHighlight
      underlayColor="rgba(34,26,38,0.5)"  // 当触摸时的颜色
          onPress={
        ()=> {
          Alert.alert(
              `你点击了按钮`,
              'Hello World！',
              [
                  {text: '以后再说', onPress: () => console.log('Ask me later pressed')},
                  {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: '确定', onPress: () => console.log('OK Pressed')},
              ]
          )
        }
    }>
        <View style={styles.containerItem}>
          <Image
            source={{
            uri: movie.subject.images.large
          }}
            style={styles.img}/>
          <View style={styles.containerText}>
            <Text style={styles.text}>{movie.subject.title}
              <Text
                style={{
                color: '#991211',
                fontSize: 15,
                paddingLeft: 20
              }}>&nbsp;&nbsp;&nbsp;&nbsp;{movie.subject.year}</Text>
            </Text>
            <Text style={{
              marginTop: 10
            }}>{movie.subject.original_title}</Text>
            <Text style={{
              marginTop: 10
            }}>{movie.subject.directors['0'].name}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  
  render() {
    if(!this.state.flag){
      return (
        <View style={styles.containerItem}>
          <View style={styles.load}>
            {/*<Text style={{fontSize:20}}>
              加载中。。。
            </Text>*/}
            <ActivityIndicator
            animating={this.state.animating}
            size="large" 
            color='#008dee'
            />
          </View>
        </View>
      )
    }
    return (
      <View style={styles.content}>
        {/*<Button title="Go to Jane's profile" />*/}
        {/*<Image source={{uri: 'http://www.youxi500.cn/uploads/allimg/140922/0350155115-3.jpg'}}
      style={styles.img} />*/}
        <ListView
          dataSource={this.state.movies}
          renderRow={this.movieList}
          style={styles.titleText}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  load: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  containerText: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    // alignItems: '', justifyContent: 'center'
  },
  containerItem: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(99,44,88,0.3)',
    borderColor: 'rgba(0,0,0,.3)',
    flex: 1,
    height: 200,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(0,0,0,0.1)',
    paddingTop: 0
  },
  titleText: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    flex: 1
  },
  text: {
    fontSize: 20
  },
  img: {
    width: 100,
    height: 150,
    marginLeft: 10
    // flex:1
  }
});

export default MoviesList