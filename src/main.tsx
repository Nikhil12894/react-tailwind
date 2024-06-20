import { ReactKeycloakProvider } from "@react-keycloak/web";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { appRout } from "./AppRouts";
import { ThemeProvider } from "./components/theme-provider";
import { Loader } from "./components/ui/loader";
import "./index.css";
import { onKeycloakEvent, onKeycloakTokens } from "./service/auth.service";
import authClient from "./service/keycloak";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: 1000,
    },
  },
});

if (import.meta.env.MODE === "development") {
  document.body.classList.add("debug-screens");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReactKeycloakProvider
    authClient={authClient}
    onEvent={onKeycloakEvent}
    onTokens={onKeycloakTokens}
  >
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <Suspense fallback={<Loader size={10} />}>
            <RouterProvider router={appRout} />
          </Suspense>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  </ReactKeycloakProvider>
);
