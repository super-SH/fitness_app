import React from 'react';
import './App.css';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { AppLayout, Error } from './ui';
import { ExerciseDetails, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/exercise/:id',
        element: <ExerciseDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
