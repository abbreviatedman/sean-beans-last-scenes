import React from 'react';
import { Button, View } from 'react-native';

import { MOVIE_PAGE_SCREEN } from '../constants/screenConstants';

const MovieListingButton = ({navigation, movie}) => (
  <View>
    <Button
      onPress={() => navigation.navigate(MOVIE_PAGE_SCREEN, {movie})}
      title={'PLAY'}
      color={'green'}
    />
  </View>
);

export default MovieListingButton;
