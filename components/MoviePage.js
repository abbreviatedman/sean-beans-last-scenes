import React, {Component} from 'react';
import { StyleSheet, View, WebView } from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls'

import CenterView from './CenterView';
import MyText from './MyText';

const styles = StyleSheet.create({
  view: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 5,
    margin: 20,
    flex: 1
  },
})

class MoviePage extends Component {
  constructor(props) {
    super(props);
    const {movie} = this.props.navigation.state.params;
    this.state = {movie, paused: true};
  }
    
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.movie.title
  })
  
  render() {
    const {title, year, url} = this.state.movie;
    const {paused} = this.state;
    
    return (
      <View style={styles.view}>
        <MyText text={`Title: ${title}`} />
        <MyText text={`Year: ${year}`} />
        <WebView
          source={{uri: url}}
          style={{flex: 1}}
        />
      </View>
    )
  }
}

export default MoviePage;