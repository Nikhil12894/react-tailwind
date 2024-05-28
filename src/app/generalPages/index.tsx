import { Outlet } from "react-router-dom";
import { FullPageHeader } from "../header/FullPageHeader";

export const GeneralPages = () => {
  return (
    <div className="overflow-x-hidden overflow-y-scroll">
      <FullPageHeader />
      <Outlet />
    </div>
  );
};
