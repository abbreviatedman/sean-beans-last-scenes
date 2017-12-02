import React, {Component} from 'react';
import {View, Linking, Button, Text} from 'react-native';


export default class EmailUsPage extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
    this.state = ({movie: props.navigation.state.params.movie});
  }
  
  static navigationOptions = ({navigation}) => ({
    title: `Help us find ${navigation.state.params.movie.title}`
  });
  
  handlePress() {
    const subject = encodeURIComponent(`Dude, I know where to find ${this.state.movie.title}`)
    const body = encodeURIComponent(`Dear Best App Maintainer Ever,
    
    I can tell you where to find that movie you've been looking for!
    
    Just go to:
    
    Sincerely,
    Your Biggest Fan`)
    Linking.openURL(`mailto:seanbeanslastscenes@gmail.com?subject=${subject}&body=${body}`);
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
