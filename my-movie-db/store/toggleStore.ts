import { ToggleState } from "@/interfaces/interfaces";
import { create } from "zustand";

export const useToggle = create<ToggleState>((set) => ({
  toggle: false,
  setToggle: (value) => set({ toggle: value }), 
}));
