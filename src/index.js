import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './app';
import Navbar from './nav';
import Aside from './aside';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <Navbar />
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Aside />
        </div>
        <div className="col-md-9">
          <App />
        </div>
      </div>
    </div>






  </React.StrictMode>
);

reportWebVitals();