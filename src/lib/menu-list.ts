import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
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
