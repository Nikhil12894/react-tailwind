import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface useTitleStore {
  title: string;
  setTitle: (title: string) => void;
}

export const useTitle = create(
  persist<useTitleStore>(
    (set) => ({
      title: "Dashboard",
      setTitle: (title) => {
        set({ title: title });
      },
    }),
    {
      name: "Title Store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
