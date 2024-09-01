"use client";
import { CardFilm } from "@/components/Card/CardFilm";
import { API_KEY } from "@/utils/apiKey";
import { IDataFilms, IResponseFilm } from "@/zustand/film/filmTypes";
import { useFilm } from "@/zustand/film/useFilm";
import React, { useEffect, useState } from "react";

type Props = {};

export const ListMovies = (props: Props) => {
  const { films, isLoading, setFilms, setLoading, keyword } = useFilm();
  const [page, setPage] = useState<string>("1");
  const [total_page, setTotal_page] = useState<number>(0);

  const getMovies = async (onPage?: string, resetFilms: boolean = false) => {
    setLoading(true);
    const url =
      keyword.trim() === ""
        ? "https://api.themoviedb.org/3/discover/movie?"
        : "https://api.themoviedb.org/3/search/movie?";

    try {
      const resp = await fetch(
        url +
          new URLSearchParams({
            api_key: API_KEY,
            query: keyword.trim(),
            include_adult: "true",
            include_video: "false",
            language: "en-US",
            page: onPage || page,
            sort_by: "popularity.desc",
          }).toString()
      );

      const result: IResponseFilm = await resp.json();

      // Reset films if it's a new search or the first fetch
      setFilms(resetFilms ? result.results : [...films, ...result.results]);

      setTotal_page(result.total_pages);
      setPage(`${result.page}`);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getMovies("1", true); // resetFilms is true to reset list on new search
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const handleLoadMore = () => {
    const nextPage = parseInt(page) + 1;
    setPage(`${nextPage}`);
    getMovies(`${nextPage}`);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          {films.length === 0 ? (
            <div className="flex justify-center">
              <p>Not Found!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {films.map((data: IDataFilms, i: number) => (
                <CardFilm
                  key={i}
                  id={data.id}
                  image={data.poster_path}
                  title={data.title}
                />
              ))}
            </div>
          )}
        </>
      )}
      {parseInt(page) < total_page && (
        <div>
          <button
            onClick={handleLoadMore}
            className="p-2 bg-slate-500 hover:bg-slate-600 text-white rounded-xl mt-2 w-full"
          >
            {isLoading ? "Loading ..." : "Load More"}
          </button>
        </div>
      )}
    </>
  );
};
