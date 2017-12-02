import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
})

const MyText = ({externalStyle, text}) => (
    <Text style={[styles.text, externalStyle]}>{text}</Text>
);

export default MyText;
