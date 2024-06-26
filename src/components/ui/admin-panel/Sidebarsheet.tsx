import { useStore } from "@/hooks/use-store";
import { useTitle } from "@/hooks/use-title";
import { Menu } from "lucide-react";
import { Button } from "../button";
import { ModeToggle } from "../mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "../sheet";

interface SidebarSheetProps {
  menus: {
    href: string;
    label: string;
    active?: boolean;
    icon?: any;
    submenus?: Submenu[];
  }[];
}
type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

export const SidebarSheet = ({ menus }: SidebarSheetProps) => {
  // const menus = useMenuItems();
  const title = useStore(useTitle, (state) => state);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <div className="flex items-center justify-center">
            <ModeToggle />
          </div>
          {menus.map((menu) => (
            <a
              key={menu.label}
              href={menu.href}
              onClick={() => title?.setTitle(menu.label)}
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              {menu.icon && <menu.icon />}
              {menu.label}
            </a>
          ))}
          {/* <a href="#" className="flex items-center gap-2 text-lg font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Home className="h-5 w-5" />
            Dashboard
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
          >
            <ShoppingCart className="h-5 w-5" />
            Orders
            <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
              6
            </Badge>
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Package className="h-5 w-5" />
            Products
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <Users className="h-5 w-5" />
            Customers
          </a>
          <a
            href="#"
            className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
          >
            <LineChart className="h-5 w-5" />
            Analytics
          </a> */}
        </nav>
        {/* <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div> */}
        {/* <li className="w-full grow flex items-end">
          <TooltipProvider disableHoverableContent>
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => <HandleLogout />}
                  variant="outline"
                  className="w-full justify-center h-10 mt-5"
                >
                  <span className="mr-4">
                    <LogOut size={18} />
                  </span>
                  <p className={cn("whitespace-nowrap", "opacity-100")}>
                    Sign out
                  </p>
                </Button>
              </TooltipTrigger>

              <TooltipContent side="right">Sign out</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li> */}
      </SheetContent>
    </Sheet>
  );
};
