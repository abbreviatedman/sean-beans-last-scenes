import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FormPage from './components/FormPage';
import MainPage from './components/MainPage';
import MoviePage from './components/MoviePage';
import {HOME, MOVIE_PAGE_SCREEN, FORM_PAGE_SCREEN} from './constants/screenConstants';


export const SeanBeansLastScenes = StackNavigator({
  [HOME]: {screen: MainPage},
  [MOVIE_PAGE_SCREEN]: {screen: MoviePage},
  [FORM_PAGE_SCREEN]: {screen: FormPage}
});

AppRegistry.registerComponent('SeanBeansLastScenes', () => SeanBeansLastScenes);
