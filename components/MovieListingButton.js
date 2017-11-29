import React from 'react';
import {Button, View} from 'react-native';

const MovieListingButton = ({navigation, movie, buttonText, color, screen}) => (
  <View>
    <Button
      onPress={() => navigation.navigate(screen, {movie})}
      title={buttonText}
      color={color}
    />
  </View>
);

export default MovieListingButton;
