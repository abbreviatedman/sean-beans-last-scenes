import React from 'react';
import {Button,
  View,
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 10,
    margin: 9,
    borderWidth: 3,
    borderColor: '#d6d7da',
    height: 100
  },
  leftSide: {
    flex: 1,
    justifyContent: 'space-around',
  },
  rightSide: {
    flex: 1,
    justifyContent: 'space-around'
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

