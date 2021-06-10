import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1.js';
//import App2 from './App2.js'; 
//import App3 from './App3.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App1 />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
