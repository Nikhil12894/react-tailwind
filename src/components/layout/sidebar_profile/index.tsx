export const SidebarProfile = () => {
  return (
    <div className="mt-8 text-center">
      <img
        src="images/second_user.webp"
        alt=""
        className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
      />
      <h5 className="mt-4 hidden text-xl font-semibold lg:block">
        Cynthia J. Watts
      </h5>
      <span className="hidden text-muted-foreground lg:block">Admin</span>
    </div>
  );
};
