export const SidebarProfile = () => {
  return (
    <div className="mt-8 text-center">
      <img
        src="images/second_user.webp"
        alt=""
        className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
      />
      <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300">
        Cynthia J. Watts
      </h5>
      <span className="hidden text-gray-400 lg:block">Admin</span>
    </div>
  );
};
