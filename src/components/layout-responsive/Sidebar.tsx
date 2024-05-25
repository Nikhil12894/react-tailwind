import { Logo } from "./Logo";
import { SideMenubar } from "./SideMenubar";
import { SidebarAd } from "./SidebarAd";

export const Sidebar = () => {
  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <Logo />
        <SideMenubar />
        <SidebarAd />
      </div>
    </div>
  );
};
