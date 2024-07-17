import { lazy } from "react";
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
// import { Login } from "./app/login/Login.tsx";
// import { SignUpForm } from "./app/signup/SignUp.tsx";
// import { UsersPage } from "./app/users/Users.tsx";
// import { BreadcrumbComponent } from "./components/breadcrum/Breadcrum.tsx";
// import { ContentLayout } from "./components/ui/admin-panel/content-layout.tsx";
import { useAuthByPass } from "./hooks/auth-bypass.ts";
import useAuthStore from "./hooks/use-login-store.tsx";
import BlockEditor from "./editor/BlockEditor/BlockEditor.tsx";
import { initialContent } from "./editor/lib/data/initialContent.tsx";
import Tiptap from "./app/my_editor/TipTap.tsx";
const BreadcrumbComponent = lazy(() =>
  import("./components/breadcrum/Breadcrum.tsx").then(
    ({ BreadcrumbComponent }) => ({
      default: BreadcrumbComponent,
    })
  )
);
const ContentLayout = lazy(() =>
  import("./components/ui/admin-panel/content-layout.tsx").then(
    ({ ContentLayout }) => ({
      default: ContentLayout,
    })
  )
);
const GeneralPages = lazy(() =>
  import("./app/generalPages/index.tsx").then(({ GeneralPages }) => ({
    default: GeneralPages,
  }))
);
const Landing = lazy(() =>
  import("./app/landing/Landing.tsx").then(({ Landing }) => ({
    default: Landing,
  }))
);
const DashboardPage = lazy(() =>
  import("./app/dashboard/page.tsx").then(({ DashboardPage }) => ({
    default: DashboardPage,
  }))
);
const Login = lazy(() =>
  import("./app/login/Login.tsx").then(({ Login }) => ({
    default: Login,
  }))
);
const SignUpForm = lazy(() =>
  import("./app/signup/SignUp.tsx").then(({ SignUpForm }) => ({
    default: SignUpForm,
  }))
);
const UsersPage = lazy(() =>
  import("./app/users/Users.tsx").then(({ UsersPage }) => ({
    default: UsersPage,
  }))
);
const ErrorPage = lazy(() =>
  import("./components/error-page/error_page.tsx").then(({ ErrorPage }) => ({
    default: ErrorPage,
  }))
);
const AdminPanelLayout = lazy(
  () => import("./components/ui/admin-panel/admin-panel-layout.tsx")
);
const AccountPage = lazy(() => import("./app/account/Account.tsx"));

const DynamicForm = lazy(() => import("./app/dynamicforma/dynamic-form.tsx"));
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

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const authBypass = useAuthByPass();

  return isAuthenticated || authBypass ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
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
        path: "post/:title",
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
      {
        path: "editor",
        element: <Tiptap />,
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
