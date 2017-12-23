import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

const CenterView = ({children}) => (
  <View style={styles.container}>
    {children}
  </View>
);

export default CenterView;
