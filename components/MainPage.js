import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';
import axios from 'axios';

import CenterView from './CenterView';
import MovieListing from './MovieListing';
import MovieList from './MovieList';
import MyText from './MyText';
import sortMoviesByYearDescending from '../utilities/sortMoviesByYearDescending';

class MainPage extends Component {
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
        <MovieList movies={moviesWithClips} navigation={navigation} />
        <MovieList movies={moviesWithoutClips} navigation={navigation} />
     </ScrollView>
    );
  }
}

MainPage.router = MovieListing.router;

export default MainPage;
