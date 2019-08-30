import React, { Component, } from 'react'
import { connect } from 'react-redux'
import { MoviesList } from '../../components';
import withPreloader from '../../components/hocs/withPreloader';

import './movieSearcher.scss';

const MovieListWithPreloader = withPreloader(MoviesList);

class MovieSearcher extends Component {

  render() {

    const { moviesList, error, isLoading } = this.props;
    return (
      <div className="movie-searcher">
        <MovieListWithPreloader isLoading={isLoading} moviesList={moviesList} error={error} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies }) => ({
  moviesList: movies.moviesList,
  error: movies.error,
  isLoading: movies.isLoading
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearcher)
