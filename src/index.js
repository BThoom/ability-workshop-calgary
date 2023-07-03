import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Throw404 } from './UtilityComponents'
import Page from './Pages/Page'
import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage'
import VolunteerPage from './Pages/VolunteerPage'
import DonationPage from './Pages/DonationPage'
import ProjectsPage from './Pages/ProjectsPage'
import RequestAssistancePage from './Pages/RequestAssistancePage'

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<Page baseTitle="Ability Workshop" />} errorElement={<ErrorPage />}>
            <Route errorElement={<ErrorPage />}>
                <Route path="*" element={<Throw404 />} />
                <Route index element={<HomePage />} />
                <Route path="donate" element={<DonationPage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="request-assistance" element={<RequestAssistancePage />} />
                <Route path="volunteer" element={<VolunteerPage />} />
            </Route>
        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
