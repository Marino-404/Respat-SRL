import { create } from "zustand";

export interface AppState {
  lang: boolean;
  showMenu: boolean;
  navActive: boolean;
  currentSection: string;
  changeLang: (lang: boolean) => void;
  setShowMenu: (showMenu: boolean) => void;
  setNavActive: (navActive: boolean) => void;
  setCurrentSection: (section: string) => void;
}

export const useAppState = create<AppState>((set) => ({
  lang: true,
  showMenu: false,
  navActive: false,
  currentSection: "home",
  changeLang: (lang: boolean) => set({ lang }),
  setShowMenu: (showMenu: boolean) => set({ showMenu }),
  setNavActive: (navActive: boolean) => set({ navActive }),
  setCurrentSection: (section) => set({ currentSection: section }),
}));
