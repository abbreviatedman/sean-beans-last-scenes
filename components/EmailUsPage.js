import React, {Component} from 'react';
import {View, Linking, Button, Text} from 'react-native';
import { EMAIL_SUBJECT, EMAIL_BODY } from '../constants/copyConstants/emailCopy';


const EMAIL_ADDRESS = 'seanbeanslastscenes@gmail.com'

export default class EmailUsPage extends Component {
  state = ({movie: props.navigation.state.params.movie});

  static navigationOptions = ({navigation}) => ({
    title: `Help us find ${navigation.state.params.movie.title}`
  });

  handlePress = () => {
    const subject = encodeURIComponent(`${EMAIL_SUBJECT} ${this.state.movie.title}`)
    const body = encodeURIComponent(`${EMAIL_BODY}`)
    Linking.openURL(`mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`);
  }

  render() {
    const {title} = this.state.movie;
    return (
      <View>
        <Text>{`We don't have a clip for ${title}, but maybe you can tell us where the movie's at?`}</Text>
        <Text>{`If you know where we can download it, we can get Sean Bean's Last Scene from ${title} properly up here.`}</Text>
        <Text>{`Email us to let us know where we can find it!`}</Text>
        <Button onPress={this.handlePress} title={`Click here to tell us if Sean Bean is still with the living!`} />
      </View>
    );
  }
}
