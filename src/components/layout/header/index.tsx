import { useSidebar } from "../../../context";
import { ModeToggle } from "../../ui/mode-toggle";

export const Header = () => {
  const { toggleOpened } = useSidebar();
  const isOpened = () => {
    toggleOpened();
  };
  return (
    <>
      <div className="sticky top-0 h-16 border-b  lg:py-2.5">
        <div className="flex items-center justify-between space-x-4 px-6">
          <h5 hidden className="text-2xl font-medium  lg:block">
            Dashboard
          </h5>
          <button
            className="-mr-2 h-16 w-12 border-r lg:hidden "
            onClick={isOpened}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="flex space-x-4">
            <div hidden className="md:block">
              <div className="relative flex items-center focus-within:text-cyan-400">
                <span className="absolute left-4 flex h-6 items-center border-r pr-3">
                  <svg
                    xmlns="http://ww50w3.org/2000/svg"
                    className="w-4 fill-slate-400"
                    viewBox="0 0 35.997 36.004"
                  >
                    <path
                      id="Icon_awesome-search"
                      data-name="search"
                      d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                    ></path>
                  </svg>
                </span>
                <input
                  type="search"
                  name="leadingIcon"
                  id="header-search"
                  placeholder="Search here"
                  className="outline-none w-full rounded-xl border  py-2.5 pl-14 pr-4 text-sm  transition bg-background"
                />
              </div>
            </div>

            <button
              aria-label="search"
              className="h-10 w-10 rounded-xl border  md:hidden "
            >
              <svg
                xmlns="http://ww50w3.org/2000/svg"
                className="mx-auto w-4 fill-current "
                viewBox="0 0 35.997 36.004"
              >
                <path
                  id="Icon_awesome-search"
                  data-name="search"
                  d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                ></path>
              </svg>
            </button>
            <button aria-label="chat" className="h-10 w-10 rounded-xl border ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </button>
            <button
              aria-label="notification"
              className="h-10 w-10 rounded-xl border "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="m-auto h-5 w-5 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
