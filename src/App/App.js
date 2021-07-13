//Import react anywhere JSX is used
import React from 'react';
import './App.css';
import MainContent from '../components/MainContent';

function App() {
  //Component needs to return a single JSX element, multiple elements can be wrapped in one div
  return (
    <div className='app'>
      <div className='flexbox'>
        <div className='background'></div>
        <footer> created by ksenia palchikova &copy; 2021 </footer>
      </div>
      <section className='main'>
        <header className='app-header'>Stuff I need to do:</header>
        <MainContent />
      </section>
    </div>
  );
};

export default App;
