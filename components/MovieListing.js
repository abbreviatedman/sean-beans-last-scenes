import React from 'react';
import {Button,
  View,
  StyleSheet,
  Text,
  Image
} from 'react-native';

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
    width: 90
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

const RED = 'red';
const GREEN = 'green';

const MovieListing = ({movie, navigation}) => {
  const {navigate} = navigation;
  const {title, year, cloudinaryName} = movie;
  let {posterUri} = movie;
  posterUri = posterUri ? posterUri : 'o';
  let button = (
    <Button
      onPress={() => navigate('MoviePageScreen', {movie})}
      title={`Play`}
      color={GREEN}
    />
  );
  if (!cloudinaryName) {
    button = (
      <Button
        onPress={() => navigate('MoviePageScreen', {movie})}
        title={`Help us find it!`}
        color={RED}
      />
    );
  }
  return (
    <View style={styles.row}>
      <View style={styles.posterContainer}>
        <Image source={{uri: posterUri}} style={styles.poster} />
      </View>
      <View style={styles.leftSide}>
        <Text style={styles.emphasis}>{`${title} - ${year}`}</Text>
      </View>
      <View style={styles.rightSide}>
        {button}
      </View>
    </View>
  );
};

export default MovieListing;

