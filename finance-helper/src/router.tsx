import { createBrowserRouter } from "react-router-dom";
import Navigation from "./pages/Navigation";
import { BudgetPage, ErrorPage, InvestmentsPage } from "./pages/pages";
import SpendingPage from "./pages/SpendingPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
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

export default router;