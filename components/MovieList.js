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
    this.state = {moviesWithClips: [], moviesWithoutClips: []};
  }
  
  componentDidMount() {
    axios.get('https://seanbeanapi.herokuapp.com/api/movies')
      .then(response => {
        const movies = response.data;
        const moviesWithClips = movies.filter(movie => movie.cloudinaryName).sort(sortMoviesByYearDescending);
        const moviesWithoutClips = movies.filter(movie => !movie.cloudinaryName).sort(sortMoviesByYearDescending);
        this.setState({moviesWithClips, moviesWithoutClips});
      });
  }
  
  render() {
    const {moviesWithClips, moviesWithoutClips} = this.state;
    const {navigation} = this.props;
    
    return (
      <ScrollView>
        <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 30}}>{`Did Sean die? Watch his last scene in each movie to find out!`}</Text>
        {moviesWithClips.map(movie => (
          <View key={movie.title}>
            <MovieListing movie={movie} navigation={navigation} />
          </View>
        ))}
        {moviesWithoutClips.map(movie => (
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
