import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import PATH from "./path";
import App from "../App";
import AuthProvider from "@pages/auth";
import DashboardCmsPage from "@pages/cms";
import LoginCms from "@pages/cms/login";
import ManageUserPage from "@pages/cms/user";
import ManageBlogPage from "@pages/cms/blog";
import ErrorPage from "@pages/error";

const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <App />,
  },
  {
    path: PATH.LOGIN_PAGE,
    element: <LoginCms />,
  },
  {
    path: PATH.DASHBOARD_PAGE,
    element: (
      <AuthProvider>
        <DashboardCmsPage />
      </AuthProvider>
    ),
  },
  {
    path: PATH.USERS_PAGE,
    element: (
      <AuthProvider>
        <ManageUserPage />
      </AuthProvider>
    ),
  },
  {
    path: PATH.BLOGS_PAGE,
    element: (
      <AuthProvider>
        <ManageBlogPage />
      </AuthProvider>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const AppRoute = () => (
  <Suspense>
    <RouterProvider router={router} />
  </Suspense>
);

export default AppRoute;
