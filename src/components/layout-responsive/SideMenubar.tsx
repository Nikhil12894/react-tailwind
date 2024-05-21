import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import { Badge } from "../ui/badge";

const SideMenubar = () => {
  return (
    <div className="flex-1">
      <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Home className="h-4 w-4" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <ShoppingCart className="h-4 w-4" />
          Orders
          <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
            6
          </Badge>
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
        >
          <Package className="h-4 w-4" />
          Products{" "}
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <Users className="h-4 w-4" />
          Customers
        </a>
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <LineChart className="h-4 w-4" />
          Analytics
        </a>
      </nav>
    </div>
  );
};

export default SideMenubar;
