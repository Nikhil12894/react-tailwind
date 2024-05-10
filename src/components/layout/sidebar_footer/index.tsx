export const SidebarFooter = () => {
  return (
    <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
      <button className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span className="group-hover:text-gray-700 dark:group-hover:text-white">
          Logout
        </span>
      </button>
    </div>
  );
};
