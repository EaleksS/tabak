import { create } from "zustand";
import { persist } from "zustand/middleware";

type useConfirmation = {
  isActive: boolean;
  setIsActive: (bool: boolean | "reverse") => void;
  confirm: boolean;
  setConfirm: (bool: boolean) => void;
};

export const useConfirmation = create(
  persist<useConfirmation>(
    (set, get) => ({
      isActive: false,
      setIsActive: (bool) => {
        if (typeof bool !== "boolean")
          return set({ isActive: !get().isActive });

        set({ isActive: bool });
      },
      confirm: false,
      setConfirm: (bool) => {
        set({ confirm: bool });
      },
    }),
    { name: "confirmation" }
  )
);
