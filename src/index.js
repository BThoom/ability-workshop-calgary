import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage'
import VolunteerPage from './Pages/VolunteerPage'
import DonationPage from './Pages/DonationPage'
import ProjectsPage from './Pages/ProjectsPage'
import RequestAssistancePage from './Pages/RequestAssistancePage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/donate",
        element: <DonationPage />
    },
    {
        path: "/projects",
        element: <ProjectsPage />
    },
    {
        path: "/request-assistance",
        element: <RequestAssistancePage />
    },
    {
        path: "/volunteer",
        element: <VolunteerPage />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
