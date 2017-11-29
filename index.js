import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainPage from './components/MainPage';
import MoviePage from './components/MoviePage';


export const SeanBeansLastScenes = StackNavigator({
  Home: {screen: MainPage},
  MoviePageScreen: {screen: MoviePage}
});

AppRegistry.registerComponent('SeanBeansLastScenes', () => SeanBeansLastScenes);
