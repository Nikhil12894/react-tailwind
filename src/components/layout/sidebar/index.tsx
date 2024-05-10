import { useSidebar } from "../../../context";
import { Logo } from "../logo";
import { Menu } from "../menu";
import { SidebarFooter } from "../sidebar_footer";
import { SidebarProfile } from "../sidebar_profile";

export const SideBar = () => {
  const { isOpened } = useSidebar();

  return (
    <aside
      className={`fixed top-0 z-10 flex h-full ${
        !isOpened && "ml-[-100%]"
      } w-auto flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[20%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700`}
    >
      <div>
        <Logo />
        <SidebarProfile />
        <Menu />
      </div>
      <SidebarFooter />
    </aside>
  );
};
