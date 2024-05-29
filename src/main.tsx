import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Portfolio } from "./app/Portfolio/Portfolio.tsx";
import { Dashboard } from "./app/dashboard/Dashboard.tsx";
import { Landing } from "./app/landing/Landing.tsx";
import { PersonLazy } from "./app/person/Person_data_table.tsx";
import { ScheduleComp } from "./schedule-app/schedule/Schedule.tsx";
import { ScheduleLazy } from "./schedule-app/schedule_lazy/schedule.tsx";
import { ErrorPage } from "./components/error-page/error_page.tsx";
import { LayoutResponsive } from "./components/layout-responsive/index.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
import { GeneralPages } from "./app/generalPages/index.tsx";
import { TaskTable } from "./schedule-app/Task/task-table.tsx";
// import { Blog } from "./app/blog/Blog.tsx";

const Portfolio = lazy(() =>
  import("./app/Portfolio/Portfolio.tsx").then(({ Portfolio }) => ({
    default: Portfolio,
  }))
);
const Blog = lazy(() =>
  import("./app/blog/Blog.tsx").then(({ Blog }) => ({
    default: Blog,
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
    ],
  },
  {
    path: "app",
    errorElement: <ErrorPage />,
    element: <LayoutResponsive />,
    children: [
      {
        index: true,
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
