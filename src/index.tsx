import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFoundComponent from "@components/404/not-found.component";
import HomeComponent from "@components/home/home.component";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeComponent />
        },
        {
            path: "*",
            element: <NotFoundComponent />
        },
    ],
    {
        future: {
            // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
            v7_normalizeFormMethod: true,
        },
    });

root.render(
  <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
