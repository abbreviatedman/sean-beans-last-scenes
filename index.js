import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import EmailUsPage from './components/EmailUsPage';
import MainPage from './components/MainPage';
import MoviePage from './components/MoviePage';
import {HOME, MOVIE_PAGE_SCREEN, EMAIL_US_PAGE_SCREEN} from './constants/screenConstants';


export const SeanBeansLastScenes = StackNavigator({
  [HOME]: {screen: MainPage},
  [MOVIE_PAGE_SCREEN]: {screen: MoviePage},
  [EMAIL_US_PAGE_SCREEN]: {screen: EmailUsPage}
});

AppRegistry.registerComponent('SeanBeansLastScenes', () => SeanBeansLastScenes);
