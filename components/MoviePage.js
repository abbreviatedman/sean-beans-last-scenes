import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import CenterView from './CenterView';
import MyText from './MyText';

const styles = StyleSheet.create({
  view: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 5,
    margin: 20,
  },
})

class MoviePage extends Component {
  constructor(props) {
    super(props);
    const {movie} = this.props.navigation.state.params;
    this.state = {movie};
    }
    
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.movie.title
  })
  
  render() {
    const {title, year, url} = this.state.movie;
    
    return (
      <View style={styles.view}>
        <MyText text={`Title: ${title}`} />
        <MyText text={`Year: ${year}`} />
        {/* <Video
          source={{uri: url}}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: 300, height: 300 }}
        /> */}
      </View>
    )
  }
}

export default MoviePage;