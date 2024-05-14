import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <div className="px-6 pt-6">
        <div className="flex h-[67vh] sm:h-[73vh] md:[73vh] xl:[80vh] 2xl:h-[83vh] w-[100%] rounded-xl border-2 border-dashed scroll-smooth focus:overflow-y-auto overflow-x-auto">
          {/* <span className="dark:text-white">Content</span> */}
          <Outlet />
        </div>
      </div>
    </>
  );
};
