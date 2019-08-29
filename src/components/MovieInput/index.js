import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MovieInput = ({ id, name, ...attrs }) => {

  const classes = classNames(
    'input',
    'className'
  )

  return (
    <Fragment>
      <input
        type="text"
        className={classes}
        {...attrs}
      />
    </Fragment>
  )
}

MovieInput.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default MovieInput
