import create from "zustand";
import { persist } from "zustand/middleware";

interface DarkModeState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
export const useDarkModeStore = create(
  persist<DarkModeState>(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    {
      name: "dark-mode",
    }
  )
);
