/** @format */

import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, RegisterPage } from "@/pages";
import { AuthLayout, DashboardLayout, DashboardUserLayout } from "./layouts";
import { FavoritePage, SettingsPage } from "./pages";
const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [{
      path: '/',
      element:<HomePage/>
    }]
  },
  {
    path: '/',
    element: <DashboardUserLayout />,
    children: [
        {
          path: 'favorite',
          element: <FavoritePage />,
        },
        {
          path: 'settings',
          element: <SettingsPage />,
        },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            path: 'register',
            element: <RegisterPage />,
        },
    ],
},
]);

export default router;