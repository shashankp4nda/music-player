import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Grade from 'grade-js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

Grade(document.querySelectorAll('Player'))