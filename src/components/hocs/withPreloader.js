import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const Preloader = () => (
  <FontAwesomeIcon icon={faSpinner} spin />
);

const hocFunc =  (WrappedComponent) => {
  const HocComponent = ({ isLoading, ...attrs }) => isLoading ? <Preloader /> : <WrappedComponent {...attrs} />;

  return HocComponent;
}

export default hocFunc;
