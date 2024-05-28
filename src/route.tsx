import { Home, Package, ShoppingCart, Users } from "lucide-react";
import { MenuItem } from "./types/menu";

function useMenuItems(): MenuItem[] {
  return [
    {
      name: "Dashboard",
      link: "/app/dashboard",
      icon: () => {
        return <Home className="h-5 w-5" />;
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
  ];
}

export { useMenuItems };
