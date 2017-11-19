import React from 'react';
import {Button, StyleSheet} from 'react-native';

// const styles = StyleSheet.create({
//   hasClip: {
//     color: 'green'
//   },
//   noClip: {
//     color: 'red'
//   }
// });

const RED = 'red';
const GREEN = 'green';

const MovieListing = ({movie, navigation}) => {
  const {navigate} = navigation;
  const {title, year, cloudinaryName} = movie;
  const color = cloudinaryName ? GREEN : RED;
  return (
    <Button
      onPress={() => navigate('MoviePageScreen', {movie})}
      title={`${title} - ${year}`}
      color={color}
    />
  );
};

export default MovieListing;

