import { create } from "zustand";

interface CurrSectionStore {
  currSection: string;
  setCurrSection: (currSection: string) => void;
}

export const useCurrSectionStore = create<CurrSectionStore>((set) => ({
  currSection: "",
  setCurrSection: (currSection) => set(() => ({ currSection })),
}));
