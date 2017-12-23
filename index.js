import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import EmailUsPage from './src/components/EmailUsPage';
import MainPage from './src/components/MainPage';
import MoviePage from './src/components/MoviePage';
import {HOME, MOVIE_PAGE_SCREEN, EMAIL_US_PAGE_SCREEN} from './src/constants/screenConstants';


export const SeanBeansLastScenes = StackNavigator({
  [HOME]: {screen: MainPage},
  [MOVIE_PAGE_SCREEN]: {screen: MoviePage},
  [EMAIL_US_PAGE_SCREEN]: {screen: EmailUsPage}
});

AppRegistry.registerComponent('SeanBeansLastScenes', () => SeanBeansLastScenes);
