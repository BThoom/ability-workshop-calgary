import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Volunteer from './Volunteer'
import Donation from './Donation'
import Projects from './Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Donation />
  </React.StrictMode>
);
