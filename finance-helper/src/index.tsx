import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { BudgetPage, InvestmentsPage, SpendingPage } from './pages/pages';
import Navigation from './pages/Navigation'

const errorElement = <h3>Error</h3>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: errorElement,
    children: [
      {
        index: true,
        element: <App />,
        errorElement: errorElement
      },
      {
        path: "budget",
        element: <BudgetPage />
      },
      {
        path: "spending",
        element: <SpendingPage />
      },
      {
        path: "investments",
        element: <InvestmentsPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);