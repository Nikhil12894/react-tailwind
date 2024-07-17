import {
  Gauge,
  Home,
  ListTodo,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";
import { MenuItem } from "../types/menu";

function useMenuItems(): MenuItem[] {
  return [
    {
      name: "Home",
      link: "/",
      icon: () => {
        return <Home className="h-5 w-5" />;
      },
    },
    {
      name: "Dashboard",
      link: "/app/dashboard",
      icon: () => {
        return <Gauge className="h-5 w-5" />;
      },
    },
    {
      name: "Schedule",
      link: "/app/schedule",
      icon: () => {
        return <ShoppingCart className="h-5 w-5" />;
      },
    },
    {
      name: "Schedule-Lazy",
      link: "/app/schedule_lazy",
      icon: () => {
        return <Package className="h-5 w-5" />;
      },
    },
    {
      name: "Person",
      link: "/app/person",
      icon: () => {
        return <Users className="h-5 w-5" />;
      },
    },
    {
      name: "Tasks",
      link: "/app/task",
      icon: () => {
        return <ListTodo className="h-5 w-5" />;
      },
    },
    {
      name: "Forms",
      link: "/app/forms",
      icon: () => {
        return <ListTodo className="h-5 w-5" />;
      },
    },
  ];
}

const headerMenus: MenuItem[] = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "App",
    link: "/app",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Editor",
    link: "/editor",
  },
];
const signUpAndLoginMenus: MenuItem[] = [
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Sign Up",
    link: "/signUp",
  },
];

export { useMenuItems, headerMenus, signUpAndLoginMenus };
