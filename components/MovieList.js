import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import axios from 'axios';

import CenterView from './CenterView';
import MovieListing from './MovieListing';
import MyText from './MyText';
import sortMoviesByYearDescending from '../utilities/sortMoviesByYearDescending';

class MovieList extends Component {
  static navigationOptions = {
    title: "Sean Bean's Last Scenes"
  };
  
  constructor(prop) {
    super();
    this.state = {movies: []}
  }
  
  componentDidMount() {
    axios.get('https://seanbeanapi.herokuapp.com/api/movies')
      .then(response => this.setState({movies: response.data}));
  }
  
  render() {
    const {movies} = this.state;
    const {navigation} = this.props;
    
    return (
      <ScrollView>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>{`Did Sean die? Watch his last scene in each movie to find out!`}</Text>
        {movies.map(movie => (
          <View key={movie.title}>
            <MovieListing movie={movie} navigation={navigation} />
          </View>
        ))}
     </ScrollView>
    );
  }
}

MovieList.router = MovieListing.router;

export default MovieList;
