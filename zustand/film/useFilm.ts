import { create } from "zustand";
import { IDataFilms } from "./filmTypes";

export interface CounterState {
  films: IDataFilms[];
  keyword: string;
  isLoading: boolean;
  setFilms: (films: IDataFilms[]) => void;
  setLoading: (loading: boolean) => void;
  setKeyword: (key: string) => void;
}

export const useFilm = create<CounterState>((set) => ({
  films: [],
  keyword: "",
  isLoading: false,
  setFilms: (updateFilm) => set({ films: updateFilm }),
  setLoading: (loading) => set({ isLoading: loading }),
  setKeyword: (key) => set({ keyword: key }),
}));
