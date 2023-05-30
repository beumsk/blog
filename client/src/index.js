import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import P404 from './pages/P404';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Write from './pages/Write';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <P404 />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'blog',
        children: [
          { index: true, element: <Blog /> },
          { path: ':slug', element: <Post /> },
        ],
      },
      { path: 'write', element: <Write /> },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
