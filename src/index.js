import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import Nav from './nav';
import Aside from './aside';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Nav />
    <Aside />
    <App />
  </React.StrictMode>
);

reportWebVitals();
