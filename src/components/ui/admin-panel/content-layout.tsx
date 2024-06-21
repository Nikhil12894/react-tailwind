import { useStore } from "@/hooks/use-store";
import { Navbar } from "./navbar";
import { useTitle } from "@/hooks/use-title";
import { useLocation } from "react-router-dom";
import { getMenuList } from "@/lib/menu-list";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  const title1 = useStore(useTitle, (state) => state);
  const location = useLocation();
  const menuList = getMenuList(location.pathname);

  return (
    <div>
      <Navbar title={title1?.title} menuList={menuList} />
      <div className="w-full pt-8 pb-8 px-4">{children}</div>
    </div>
  );
}
