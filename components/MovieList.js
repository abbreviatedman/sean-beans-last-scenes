import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import axios from 'axios';

import CenterView from './CenterView';
import MovieListing from './MovieListing';
import MyText from './MyText';

const dummyData = [{number: 1, key: 1},{number: 2, key: 2},{number: 3, key: 3}]

class MovieList extends Component {
  constructor() {
    super();
    this.state = {movies: []}
  }
  
  _renderItem({item}) {
    return <MovieListing movie={item} />
  }
    
  _keyExtractor(item, index) {
    return item.title;
  }
  
  componentDidMount() {
    axios.get('https://seanbeanapi.herokuapp.com/api/movies')
    .then(response => this.setState({movies: response.data}));
  }
  // const moviesToData = movies.map(movie => {
  //   return {key: movie}
  // });
  // const movie = movies[0] || {title: 'hi'};
  render() {
    const {movies} = this.state;
    
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={movies}
        renderItem = {this._renderItem}
      />
    );
  }
}

export default MovieList;

