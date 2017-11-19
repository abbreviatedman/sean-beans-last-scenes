import React from 'react';
import {Button} from 'react-native';

const MovieListing = ({movie, navigation}) => {
  const {navigate} = navigation;
  const {title, year} = movie;
  return (
    <Button
      onPress={() => navigate('MoviePageScreen', {movie})}
      title={`${title}, ${year}`}
    />
  );
}

export default MovieListing;

