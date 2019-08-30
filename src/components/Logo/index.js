import React from 'react';
import PropTypes from 'prop-types';
import './Logo.scss';

const Logo = ({ text, ...attrs }) => {
  return (
    <div className='logo'>
      <span className='logo__text'>{text}</span>
    </div>
  )
}

Logo.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Logo
