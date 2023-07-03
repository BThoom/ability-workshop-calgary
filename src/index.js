import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Page from './Pages/Page'
import HomePage from './Pages/HomePage'
import VolunteerPage from './Pages/VolunteerPage'
import DonationPage from './Pages/DonationPage'
import ProjectsPage from './Pages/ProjectsPage'
import RequestAssistancePage from './Pages/RequestAssistancePage'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Page baseTitle="Ability Workshop" />}>
            <Route index element={<HomePage />} />
            <Route path="donate" element={<DonationPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="request-assistance" element={<RequestAssistancePage />} />
            <Route path="volunteer" element={<VolunteerPage />} />
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
