import React, { Fragment } from 'react';
import MovieSearcher from './containers/MovieSearcher';
import Header from "./components/Header";
import MainContent from './components/MainContent';

const App = () => (
  <Fragment>
    <Header />
    <MainContent>
      <MovieSearcher />
    </MainContent>
  </Fragment>
)

export default App;
