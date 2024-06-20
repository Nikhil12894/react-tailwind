import { lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { GeneralPages } from "./app/generalPages/index.tsx";
import { Landing } from "./app/landing/Landing.tsx";
import { Login } from "./app/login/Login.tsx";
import { SignUpForm } from "./app/signup/SignUp.tsx";
import AdminPanelLayout from "./components/ui/admin-panel/admin-panel-layout.tsx";
import { ContentLayout } from "./components/ui/admin-panel/content-layout.tsx";
import { BreadcrumbComponent } from "./components/breadcrum/Breadcrum.tsx";
import { DashboardPage } from "./app/dashboard/page.tsx";
import DynamicForm from "./app/dynamicforma/dynamic-form.tsx";
import AccountPage from "./app/account/Account.tsx";
import { UsersPage } from "./app/users/Users.tsx";
import useAuthStore from "./hooks/use-login-store.tsx";
const Portfolio = lazy(() => import("./app/Portfolio/Portfolio.tsx"));
const Blog = lazy(() => import("./app/blog/Blog.tsx"));
const PersonLazy = lazy(() => import("./app/person/Person_data_table.tsx"));
const ScheduleLazy = lazy(
  () => import("./app/schedule-app/schedule_lazy/schedule.tsx")
);
const TaskTable = lazy(() => import("./app/schedule-app/Task/task-table.tsx"));
const ScheduleComp = lazy(
  () => import("./app/schedule-app/schedule/Schedule.tsx")
);
const AllBlogs = lazy(() => import("./app/blog/All_blogs.tsx"));

const ErrorPage = lazy(() =>
  import("./components/error-page/error_page.tsx").then(({ ErrorPage }) => ({
    default: ErrorPage,
  }))
);

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? children : null;
};

const appRout = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <GeneralPages />,
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      {
        path: "home",
        element: <Landing />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "blogs",
        element: <AllBlogs />,
      },
      {
        path: "post/",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUpForm />,
      },
    ],
  },
  {
    path: "app",
    errorElement: <ErrorPage />,
    element: (
      <PrivateRoute>
        <AdminPanelLayout>
          <ContentLayout>
            <BreadcrumbComponent />
            <Outlet />
          </ContentLayout>
        </AdminPanelLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "schedule",
        element: <ScheduleComp />,
      },
      {
        path: "schedule_lazy",
        element: <ScheduleLazy />,
      },
      {
        path: "person",
        element: <PersonLazy />,
      },
      {
        path: "task",
        element: <TaskTable />,
      },
      {
        path: "forms",
        element: <DynamicForm />,
      },
      {
        path: "account",
        element: <AccountPage />,
      },
      {
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export { appRout };
