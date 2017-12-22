import React from 'react';
import { Button, View } from 'react-native';

import { EMAIL_US_PAGE_SCREEN } from '../constants/screenConstants';

const EmailUsButton = ({navigation, movie}) => (
  <View>
    <Button
      onPress={() => navigation.navigate(EMAIL_US_PAGE_SCREEN, {movie})}
      title={'HELP US FIND THE CLIP!r'}
      color={'red'}
    />
  </View>
);

export default EmailUsButton;
