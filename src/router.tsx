import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './layouts/Dashboard';
import NonAuth from './layouts/NonAuth';
import LoginPage from './pages/Login/login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
        ],
    },
    {
        path: '/auth',
        element: <NonAuth />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
        ],
    },
]);