import { useState } from "react";
import { SidebarProvider } from "../../context";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { SideBar } from "./sidebar";

export const Layout = () => {
  const [isOpened, setIsOpened] = useState(false);
  const toggleOpened = () => {
    setIsOpened((oldTodoData) => !oldTodoData);
  };

  return (
    <SidebarProvider value={{ isOpened, toggleOpened }}>
      <SideBar />
      <div className="ml-auto mb-6 lg:w-[80%] xl:w-[80%] 2xl:w-[85%]">
        <Header />
        <Content />
        <Footer />
      </div>
    </SidebarProvider>
  );
};
