import { createContext, useContext } from "react";

export const SidebarContext = createContext({
  isOpened: false,
  toggleOpened: () => {},
});

export const SidebarProvider = SidebarContext.Provider;

export function useSidebar() {
  return useContext(SidebarContext);
}
