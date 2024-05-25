import { Outlet } from "react-router-dom";

export const Maincontent = () => {
  return (
    <div
      className="flex flex-1 rounded-lg border border-dashed shadow shadow-slate-400"
      x-chunk="dashboard-02-chunk-1"
    >
      <Outlet />
    </div>
  );
};
