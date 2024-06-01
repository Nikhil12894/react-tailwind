import AdminPanelLayout from "@/components/ui/admin-panel/admin-panel-layout.tsx";
import { ContentLayout } from "@/components/ui/admin-panel/content-layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AccountPage from "./app/account/Account.tsx";
import DynamicForm from "./app/dynamicforma/dynamic-form.tsx";
import { GeneralPages } from "./app/generalPages/index.tsx";
import { Landing } from "./app/landing/Landing.tsx";
import { Login } from "./app/login/Login.tsx";
import { SignUpForm } from "./app/signup/SignUp.tsx";
import { UsersPage } from "./app/users/Users.tsx";
import { BreadcrumbComponent } from "./components/breadcrum/Breadcrum.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { Loader } from "./components/ui/loader.tsx";
import "./index.css";

const Portfolio = lazy(() => import("./app/Portfolio/Portfolio.tsx"));
const Blog = lazy(() => import("./app/blog/Blog.tsx"));
const PersonLazy = lazy(() => import("./app/person/Person_data_table.tsx"));
const Dashboard = lazy(() => import("./app/dashboard/Dashboard.tsx"));
const ScheduleLazy = lazy(
  () => import("./schedule-app/schedule_lazy/schedule.tsx")
);
const TaskTable = lazy(() => import("./schedule-app/Task/task-table.tsx"));
const ScheduleComp = lazy(() => import("./schedule-app/schedule/Schedule.tsx"));
// const LayoutResponsive = lazy(() =>
//   import("./components/layout-responsive/index.tsx").then(
//     ({ LayoutResponsive }) => ({
//       default: LayoutResponsive,
//     })
//   )
// );

const ErrorPage = lazy(() =>
  import("./components/error-page/error_page.tsx").then(({ ErrorPage }) => ({
    default: ErrorPage,
  }))
);

const router = createBrowserRouter([
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
      <AdminPanelLayout>
        <ContentLayout title="Account">
          <BreadcrumbComponent />
          <Outlet />
        </ContentLayout>
      </AdminPanelLayout>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 5,
      retryDelay: 1000,
    },
  },
});

if (import.meta.env.MODE === "development") {
  document.body.classList.add("debug-screens");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Suspense fallback={<Loader size={10} />}>
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
