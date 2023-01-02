import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Organic1 from './Pages/Organic1';
import Category from './Pages/Category';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "organic1",
    element: <Organic1 />,
  },
  {
    path: "category",
    element: <Category />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


