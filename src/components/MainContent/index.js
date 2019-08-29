import React from 'react';
import './mainContent.css';


const MainContent = ({ children }) => {
  return (
    <main className='main-content'>
      {children}
    </main>
  );
}

export default MainContent;
