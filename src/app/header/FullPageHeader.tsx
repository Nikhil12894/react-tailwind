import { SidebarSheet } from "@/components/ui/admin-panel/Sidebarsheet";
import { Button } from "@/components/ui/button";
import { useAuthByPass } from "@/hooks/auth-bypass";
import useAuthStore from "@/hooks/use-login-store";
import { useStore } from "@/hooks/use-store";
import { useTitle } from "@/hooks/use-title";
import { headerMenuList, signUpAndLoginMenus } from "@/lib/menu-list";
import { AuthService } from "@/service/auth.service";
import { handleLogout } from "@/service/redirectionService";
import { Link, NavLink, useLocation } from "react-router-dom";

export const FullPageHeader = () => {
  const location = useLocation();
  const isAuthenticated = useAuthStore((stat) => stat.isAuthenticated);
  const title = useStore(useTitle, (state) => state);
  const bypassAuth = useAuthByPass();

  return (
    <header>
      <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 md:relative md:bg-transparent dark:shadow-none">
        <div className="xl:container m-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
            <div className="w-full flex justify-between lg:w-auto">
              <a
                href="#"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <div aria-hidden="true" className="flex space-x-1">
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-200"></div>
                  <div className="h-6 w-2 bg-primary dark:bg-primaryLight"></div>
                </div>
                <span className="text-base font-bold text-gray-600 dark:text-white">
                  NK
                </span>
              </a>
              <label
                htmlFor="hbr"
                className="block relative z-20 p-6 -mr-6 cursor-pointer"
              >
                <SidebarSheet
                  menus={[
                    ...headerMenuList(location.pathname)[0].menus,
                    ...signUpAndLoginMenus()[0].menus,
                  ]}
                />
              </label>
            </div>
            <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                  {headerMenuList(location.pathname)[0].menus.map(
                    (item, index) => (
                      <li key={index}>
                        <NavLink
                          to={item.href}
                          onClick={() => title?.setTitle(item.label)}
                          className="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight"
                        >
                          <span>{item.label}</span>
                        </NavLink>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                {bypassAuth ? (
                  <>
                    <Link
                      to="/signUp"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                        Sign Up
                      </span>
                    </Link>
                    <Link
                      to="/login"
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                        Login
                      </span>
                    </Link>
                  </>
                ) : isAuthenticated ? (
                  <Button
                    variant="outline"
                    onClick={() => handleLogout({ rout: location.pathname })}
                    className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                  >
                    <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                      Logout
                    </span>
                  </Button>
                ) : (
                  <>
                    <span
                      onClick={() => AuthService.handleReg()}
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 content-['Sign_Up'] cursor-pointer"
                    >
                      <span className="relative text-sm font-semibold text-primary dark:text-primaryLight">
                        Sign Up
                      </span>
                    </span>
                    <Button
                      variant="outline"
                      onClick={() => AuthService.handleLogin()}
                      className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <span className="relative text-sm font-semibold text-white dark:text-gray-900">
                        Login
                      </span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
