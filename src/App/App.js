//Import react anywhere JSX is used
import React from 'react';
import './App.css';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    //Component needs to return a single JSX element, multiple elements can be wrapped in one div
    return (
      <div className="app">
        <div className="main">
          <Header />
          <MainContent />
        </div>
        <Footer />
      </div>
    );
  };
};

export default App;
