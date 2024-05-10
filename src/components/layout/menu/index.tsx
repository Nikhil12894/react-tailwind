export const Menu = () => {
  return (
    <div className="overflow-hidden hover:overflow-y-auto max-h-[50vh]">
      <ul className="mt-8 space-y-2 tracking-wide">
        <li>
          <a
            href="#"
            aria-label="dashboard"
            className="relative flex items-center space-x-4 rounded-xl px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r from-sky-400 to-cyan-100"
          >
            <svg
              className="-ml-1 h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                className="fill-current text-gray-300 group-hover:text-cyan-300"
              ></path>
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                className="fill-current text-gray-600 group-hover:text-cyan-600 dark:group-hover:text-sky-400"
              ></path>
              <path
                d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                className="fill-current group-hover:text-sky-300"
              ></path>
            </svg>
            <span className="-mr-1 font-medium">Dashboard</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export interface MenuItem {
  name: string;
  link: string;
  icon?: string;
  iconClass?: string;
  children?: MenuItem[];
}
