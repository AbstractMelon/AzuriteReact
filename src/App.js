import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Site from './index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Site />
    <p>Hello from app!</p>
  </Router>,
  document.getElementById('root')
);
