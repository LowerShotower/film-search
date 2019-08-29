import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './preloader.scss';

const Preloader = () => (
  <div class='preloader'>
    <FontAwesomeIcon size='lg' icon={faSpinner} spin />
  </div>
);

const hocFunc = (WrappedComponent) => {
  const HocComponent = ({ isLoading, ...attrs }) => isLoading ? <Preloader /> : <WrappedComponent {...attrs} />;

  return HocComponent;
}

export default hocFunc;
