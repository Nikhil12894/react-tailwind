import { useSidebar } from "../../../context";
import { Logo } from "../logo";
import { Menu } from "../menu";
import { SidebarFooter } from "../sidebar_footer";
import { SidebarProfile } from "../sidebar_profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faGrip } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "@/types/menu";
export const SideBar = () => {
  const { isOpened } = useSidebar();
  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      link: "/app/dashboard",
      icon: () => {
        return <FontAwesomeIcon icon={faGrip} />;
      },
    },
    {
      name: "Schedule",
      link: "/app/schedule",
      icon: () => {
        return <FontAwesomeIcon icon={faClock} />;
      },
    },
    {
      name: "Schedule-Lazy",
      link: "/app/schedule_lazy",
      icon: () => {
        return <FontAwesomeIcon icon={faClock} />;
      },
    },
    {
      name: "Person",
      link: "/app/person",
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
