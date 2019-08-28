import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {MovieInput, MovieList} from '../../components'
export class MovieSearcher extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div classMame="movieSearcher">
        <MovieInput/>
        <MovieList/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearcher)
