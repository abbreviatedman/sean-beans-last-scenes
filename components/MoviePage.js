import React, {Component} from 'react';
import { StyleSheet, View, WebView } from 'react-native';

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

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.movie.title
  })

  render() {
    const { title, year, url } = this.props.navigation.state.params.movie;

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
