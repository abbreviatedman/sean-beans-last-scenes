import Navigator from './components/Navigator';
import React from 'react';

export default function App() {
  return <Navigator />;
}

// MovieList is the Home
// also holds state of movie list
// Renders out list of MovieLinks based on that state
// Each MovieLink gets movie data as a param
// Each MovieLink has a navigation.navigate to the MoviePage component, passing the movie data along
// The MoviePage gets a title and movie to display from that data
