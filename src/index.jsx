import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CheckProvider } from './context/CheckContext';
import { LoaderProvider } from './context/LoaderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CheckProvider>
      <LoaderProvider>
        <App />
      </LoaderProvider>
    </CheckProvider>
  </Router>
);

