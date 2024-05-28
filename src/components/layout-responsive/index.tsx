import { BreadcrumbComponent } from "../breadcrum/Breadcrum";
import { Header } from "./Header";
import { Maincontent } from "./Maincontent";
import { Sidebar } from "./Sidebar";

export const LayoutResponsive: React.FC = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-1 p-1 lg:gap-2 lg:p-2 max-h-[calc(100vh-100px)]">
          <BreadcrumbComponent />
          <Maincontent />
        </main>
      </div>
    </div>
  );
};
