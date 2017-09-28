import React from 'react';
import { StyleSheet, View } from 'react-native';

import CenterView from './CenterView';
import MyText from './MyText';

const styles = StyleSheet.create({
  view: {
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    padding: 5,
    margin: 20,
  },
})

const MovieListing = ({movie}) => {
  const {title, year, dies} = movie;
  console.log(title, year, dies)
  const DIES = dies.toString().toUpperCase();
  return (
    <View style={styles.view}>
      <MyText text={`Title: ${title}`} />
      <MyText text={`Year: ${year}`} />
      <MyText text={`Sean Bean Dies? ${DIES}`} />
    </View>
  )
}

export default MovieListing;