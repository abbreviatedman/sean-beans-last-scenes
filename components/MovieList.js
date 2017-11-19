import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
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
    this.state = {moviesWithClips: [], moviesWithoutClips: []}
  }
  
  componentDidMount() {
    axios.get('https://seanbeanapi.herokuapp.com/api/movies')
    .then(response => {
      const movies = response.data.sort(sortMoviesByYearDescending);
      const moviesWithClips = movies.filter(movie => movie.cloudinaryName)
      const moviesWithoutClips = movies.filter(movie => !movie.cloudinaryName)
      this.setState({moviesWithClips, moviesWithoutClips});
    })
  }
  
  render() {
    const {moviesWithClips, moviesWithoutClips} = this.state;
    const {navigation} = this.props;
    
    return (
      <ScrollView>
        {moviesWithClips && moviesWithClips.map(movie => (
          <View key={movie.title}>
            <MovieListing movie={movie} navigation={navigation} />
          </View>
        ))}
        {moviesWithoutClips && moviesWithoutClips.map(movie => (
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
