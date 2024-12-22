import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import PATH from "./path";
import App from "../App";
import AuthProvider from "@pages/auth";
import DashboardCmsPage from "@pages/cms";
import LoginCms from "@pages/cms/login";
import ManageUserPage from "@pages/cms/user";
import AddUserPage from "@pages/cms/user/add";
import EditUserPage from "@pages/cms/user/edit";
import ManageBlogPage from "@pages/cms/blog";
import ManageProjectPage from "@pages/cms/my-project";
import ManageTestimoniePage from "@pages/cms/testimonie";
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
    path: PATH.ADD_USERS_PAGE,
    element: (
      <AuthProvider>
        <AddUserPage />
      </AuthProvider>
    ),
  },
  {
    path: PATH.EDIT_USERS_PAGE,
    element: (
      <AuthProvider>
        <EditUserPage />
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
    path: PATH.PROJECTS_PAGE,
    element: (
      <AuthProvider>
        <ManageProjectPage />
      </AuthProvider>
    ),
  },
  {
    path: PATH.TESTI_PAGE,
    element: (
      <AuthProvider>
        <ManageTestimoniePage />
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
