import React from 'react';
import {View} from 'react-native';

import MovieListing from './MovieListing';


const MovieList = ({movies, navigation}) => (
  <View>
    {movies.map(movie => (
      <View key={movie.title}>
        <MovieListing movie={movie} navigation={navigation} />
      </View>
    ))}
  </View>
);

export default MovieList;
