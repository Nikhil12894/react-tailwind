import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/error-page/error_page.tsx";
import Dashboard from "./app/dashboard/Dashboard.tsx";
import ScheduleComp from "./app/schedule/Schedule.tsx";
import { Layout } from "./components/layout/index.tsx";
import ScheduleLazy from "./app/schedule_lazy/schedule.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PersonLazy from "./app/person/Person_data_table.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        path: "/person",
        element: <PersonLazy />,
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
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
