import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useBurgerMenu = {
  isActive: boolean;
  setIsActive: (bool: boolean | "reverse") => void;
};

export const useBurgerMenu = create(
  devtools<useBurgerMenu>((set, get) => ({
    isActive: false,
    setIsActive: (bool) => {
      if (typeof bool !== "boolean") return set({ isActive: !get().isActive });

      set({ isActive: bool });
    },
  }))
);
