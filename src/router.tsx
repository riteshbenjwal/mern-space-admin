import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './layouts/Dashboard';
import NonAuth from './layouts/NonAuth';
import Root from './layouts/Root';
import Users from './pages/users/Users';
import LoginPage from './pages/Login/login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '',
                element: <Dashboard />,
                children: [
                    {
                        path: '',
                        element: <HomePage />,
                    },
                    {
                        path: '/users',
                        element: <Users />,
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
        ],
    },
]);