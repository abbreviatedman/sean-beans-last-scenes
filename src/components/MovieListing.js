import React from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import MovieListingButton from './MovieListingButton';
import EmailUsButton from './EmailUsButton';

const MovieListing = ({movie, navigation}) => {
  const {row} = styles;
  const {title, year, cloudinaryName, posterUri} = movie;
  const uri = posterUri ? posterUri : '../../assets/no-image.png';
  return (
    <View style={row}>
      <View style={styles.posterContainer}>
        <Image source={uri} style={styles.poster} />
      </View>
      <View style={styles.leftSide}>
        <Text style={styles.emphasis}>{`${title} - ${year}`}</Text>
      </View>
      <View style={styles.rightSide}>
        {cloudinaryName
          ? <MovieListingButton
            navigation={navigation}
            movie={movie}
          />
          : <EmailUsButton
            navigation={navigation}
            movie={movie}
          />}
      </View>
    </View>
  );
};

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

export default MovieListing;

