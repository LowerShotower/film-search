import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MovieInput = ({ id, name, className, ...attrs }) => {

  const classes = classNames(
    'input',
    className
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
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
}

export default MovieInput
