import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

//ReactDom has two arguments: what to render, and where to render it
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
