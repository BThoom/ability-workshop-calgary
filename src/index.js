import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import VolunteerPage from './Pages/VolunteerPage'
import DonationPage from './Pages/DonationPage'
import ProjectsPage from './Pages/ProjectsPage'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DonationPage />
  </React.StrictMode>
);
