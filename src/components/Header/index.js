import React from 'react';
import './header.scss';
import Logo from '../Logo';
import { connect } from 'react-redux';
import { Search } from '..';
import {requestMovies, updateInput, toggleInput } from '../../store/actions';

const Header = ({ inputValue, updateInput, requestMovies, ...attrs }) => {
  const handleInputChange = ({ currentTarget: { value } }) => {
    updateInput(value);
    requestMovies(value);
  }

  return (
    <header className='main-header'>
      <Logo text='Movies' />
      <Search id="movieInput" onChange={handleInputChange} value={inputValue} />
    </header>
  )
}

const mapStateToProps = ({ input }) => ({
  inputValue: input.value,
  inputIsShowing: input.isShowing,
})

const mapDispatchToProps = {
  updateInput,
  toggleInput,
  requestMovies
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
