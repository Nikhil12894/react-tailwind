import { Outlet } from "react-router-dom";
import { FullPageHeader } from "../header/FullPageHeader";
import { useEffect } from "react";

export const GeneralPages = () => {
  useEffect(() => {
    // Applying on mount
    document.body.style.overflow = "scroll";
    // Applying on unmount
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);
  return (
    <div className="overflow-x-hidden overflow-y-scroll">
      <FullPageHeader />
      <Outlet />
    </div>
  );
};
