import React from 'react';
import './mainContent.scss';


const MainContent = ({ children }) => {
  return (
    <main className='main-content'>
      {children}
    </main>
  );
}

export default MainContent;
