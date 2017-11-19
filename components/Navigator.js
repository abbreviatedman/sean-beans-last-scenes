import {StackNavigator} from 'react-navigation';

import MovieList from './MovieList';
import MoviePage from './MoviePage';

const Navigator = StackNavigator({
  Home: {screen: MovieList},
  MoviePageScreen: {screen: MoviePage}
});

export default Navigator;
