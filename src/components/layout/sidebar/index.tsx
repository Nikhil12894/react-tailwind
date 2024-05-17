import { useSidebar } from "../../../context";
import { Logo } from "../logo";
import { Menu, MenuItem } from "../menu";
import { SidebarFooter } from "../sidebar_footer";
import { SidebarProfile } from "../sidebar_profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGrip } from "@fortawesome/free-solid-svg-icons";
export const SideBar = () => {
  const { isOpened } = useSidebar();
  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: () => {
        return <FontAwesomeIcon icon={faGrip} />;
      },
    },
    {
      name: "Schedule",
      link: "/schedule",
      icon: () => {
        return <FontAwesomeIcon icon={faClock} />;
      },
    },
    {
      name: "Schedule-Lazy",
      link: "/schedule_lazy",
      icon: () => {
        return <FontAwesomeIcon icon={faClock} />;
      },
    },
  ];

  return (
    <aside
      className={`fixed top-0 z-10 flex h-full ${
        !isOpened && "ml-[-100%]"
      } w-auto flex-col justify-between border-r px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[20%] xl:w-[20%] 2xl:w-[15%] border bg-background`}
    >
      <div>
        <Logo />
        <SidebarProfile />
        <Menu menuItems={menuItems} />
      </div>
      <SidebarFooter />
    </aside>
  );
};
