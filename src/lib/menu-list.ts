import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  Home,
  LogOut,
  LogIn,
  User2,
} from "lucide-react";

interface Submenu {
  href: string;
  label: string;
  active: boolean;
}

interface Menu {
  href: string;
  label: string;
  active?: boolean;
  icon?: any;
  submenus?: Submenu[];
}

interface Group {
  groupLabel: string;
  menus: Menu[];
}

function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/app/dashboard",
          label: "Dashboard",
          active: pathname.includes("/app/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Data-Table",
      menus: [
        {
          href: "",
          label: "Schedule",
          active: pathname.includes("/app/schedule"),
          icon: SquarePen,
          submenus: [
            {
              href: "/app/schedule_lazy",
              label: "Lazy Schedule",
              active: pathname === "/app/schedule_lazy",
            },
            {
              href: "/app/schedule",
              label: "Schedule",
              active: pathname === "/app/schedule",
            },
            {
              href: "/app/task",
              label: "Task",
              active: pathname === "/app/task",
            },
          ],
        },
        {
          href: "/app/person",
          label: "Person",
          active: pathname.includes("/app/person"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/app/forms",
          label: "Forms",
          active: pathname.includes("/app/forms"),
          icon: Tag,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/app/users",
          label: "Users",
          active: pathname.includes("/app/users"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/app/account",
          label: "Account",
          active: pathname.includes("/app/account"),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}

function headerMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/home",
          label: "Home",
          icon: Home,
          active: pathname.includes("/home"),
        },
        {
          href: "/app",
          label: "App",
          icon: LayoutGrid,
          active: pathname.includes("/app/dashboard"),
        },
        {
          href: "/portfolio",
          label: "Portfolio",
          icon: User2,
          active: pathname.includes("/portfolio"),
        },
        {
          href: "/blogs",
          label: "Blogs",
          icon: Bookmark,
          active: pathname.includes("/blogs"),
        },
        {
          href: "/editor",
          label: "Editor",
          icon: Bookmark,
          active: pathname.includes("/blogs"),
        },
      ],
    },
  ];
}

function signUpAndLoginMenus(): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          label: "Login",
          href: "/login",
          icon: LogIn,
        },
        {
          label: "Sign Up",
          href: "/signUp",
          icon: LogOut,
        },
      ],
    },
  ];
}

function brandMenuLink() {
  return {
    href: "/home",
    label: "NK",
  };
}

export { headerMenuList, signUpAndLoginMenus, getMenuList, brandMenuLink };
export type { Submenu, Menu, Group };
