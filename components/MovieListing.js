import React from 'react';
import {Button,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import MovieListingButton from './MovieListingButton';
import {GREEN, RED} from '../constants/colorConstants';
import {MOVIE_PAGE_SCREEN, EMAIL_US_PAGE_SCREEN} from '../constants/screenConstants';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 10,
    margin: 9,
    borderWidth: 3,
    borderColor: '#d6d7da',
    height: 300
  },
  posterContainer: {
    flex: 1,
    height: 180,
    width: 90,
    borderWidth: 5
  },
  leftSide: {
    flex: 1,
    justifyContent: 'space-around',
  },
  rightSide: {
    flex: 1,
    justifyContent: 'space-around'
  },
  poster: {
    flex: 1,
    resizeMode: 'contain'
  },
  emphasis: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  center: {
    textAlign: 'center'
  }
});

const MovieListing = ({movie, navigation}) => (
  <View style={styles.row}>
    <View style={styles.posterContainer}>
      {movie.posterUri
      ? <Image source={{uri: movie.posterUri}} style={styles.poster} />
      : <Text style={{fontSize: 90, textAlign: 'center', fontWeight: 'bold'}}>{`X`}</Text>}
    </View>
    <View style={styles.leftSide}>
      <Text style={styles.emphasis}>{`${movie.title} - ${movie.year}`}</Text>
    </View>
    <View style={styles.rightSide}>
      {movie.cloudinaryName
      ? <MovieListingButton
          color={GREEN}
          buttonText={'PLAY'}
          screen={MOVIE_PAGE_SCREEN}
          navigation={navigation}
          movie={movie}
      />
      : <MovieListingButton
          color={RED}
          buttonText={'HELP US FIND THE CLIP!'}
          screen={EMAIL_US_PAGE_SCREEN}
          navigation={navigation}
          movie={movie}
      />}
    </View>
  </View>
);

export default MovieListing;

