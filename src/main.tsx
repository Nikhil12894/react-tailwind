import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./app/dashboard/Dashboard.tsx";
import Landing from "./app/landing/Landing.tsx";
import PersonLazy from "./app/person/Person_data_table.tsx";
import Portfolio from "./app/Portfolio/Portfolio.tsx";
import ScheduleComp from "./app/schedule/Schedule.tsx";
import ScheduleLazy from "./app/schedule_lazy/schedule.tsx";
import ErrorPage from "./components/error-page/error_page.tsx";
import LayoutResponsive from "./components/layout-responsive/index.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "app",
    element: <LayoutResponsive />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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
