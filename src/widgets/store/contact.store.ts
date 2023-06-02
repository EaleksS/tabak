import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useContact = {
  isActive: boolean;
  setIsActive: (bool: boolean | "reverse") => void;
};

export const useContact = create(
  devtools<useContact>((set, get) => ({
    isActive: false,
    setIsActive: (bool) => {
      if (typeof bool !== "boolean") return set({ isActive: !get().isActive });

      set({ isActive: bool });
    },
  }))
);
