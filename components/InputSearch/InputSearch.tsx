"use client";
import { useFilm } from "@/zustand/film/useFilm";
import React, { useState } from "react";

type Props = {};

export const InputSearch = (props: Props) => {
  const { setKeyword } = useFilm();
  const [Search, setSearch] = useState<string>("");
  return (
    <>
      <input
        className="border border-1 border-gray-600 rounded-xl bg-transparent p-2"
        placeholder="Search"
        value={Search}
        onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
        onKeyUp={() => setKeyword(Search)}
      />
    </>
  );
};
