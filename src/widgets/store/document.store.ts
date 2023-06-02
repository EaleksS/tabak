import { create } from "zustand";
import { devtools } from "zustand/middleware";

type useDocument = {
  isActive: boolean;
  setIsActive: (bool: boolean | "reverse") => void;
};

export const useDocument = create(
  devtools<useDocument>((set, get) => ({
    isActive: false,
    setIsActive: (bool) => {
      if (typeof bool !== "boolean") return set({ isActive: !get().isActive });

      set({ isActive: bool });
    },
  }))
);
