import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { MovieInput, MoviesList } from '../../components';
import { updateInput, requestMovies } from '../../store/actions';
import withPreloader from '../../components/hocs/withPreloader';

import './movieSearcher.scss';

const MovieListWithPreloader = withPreloader(MoviesList);

class MovieSearcher extends Component {

  handleInputChange = ({ currentTarget: { value } }) => {
    this.props.updateInput(value);
    this.props.requestMovies(value);
  }

  render() {

    const { moviesList, inputValue, error, isLoading } = this.props;
    return (
      <div className="movie-searcher">
        <MovieInput id="movieInput" onChange={this.handleInputChange} value={inputValue} />
        <MovieListWithPreloader isLoading={isLoading} moviesList={moviesList} error={error} />
      </div>
    )
  }
}

const mapStateToProps = ({ movies, input }) => ({
  moviesList: movies.moviesList,
  inputValue: input.value,
  error: movies.error,
  isLoading: movies.isLoading
})

const mapDispatchToProps = {
  updateInput,
  requestMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearcher)
