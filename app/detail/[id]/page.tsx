import { API_KEY } from "@/utils/apiKey";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: { id: string };
};

const getData = async (id: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?` +
      new URLSearchParams({
        api_key: API_KEY,
        language: "en-US",
      }).toString()
  );

  const data = await response.json();
  if (data.success === false) {
    notFound();
  }
  return data;
};
export default async function detail({ params }: Props) {
  const data = await getData(params.id);
  return (
    <main className="bg-gray-100 mx-auto py-10 px-12">
      <h1 className="text-2xl text-gray-500 font-semibold text-center">
        {data.title}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 gap-3">
        <div className="flex justify-center">
          <Image
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
            width={350}
            height={450}
            className="rounded-xl h-full"
          />
        </div>
        <div className="w-full">
          <p className="text-gray-500">{data.overview}</p>
          <div className="flex p-4">
            {data.production_companies.map((row: any) => (
              <img
                src={`https://image.tmdb.org/t/p/w500${row.logo_path}`}
                alt={row.name}
                className="max-w-40 max-h-10 mr-2"
              />
            ))}
          </div>
          <p className="text-gray-500 text-end font-bold">
            {data.release_date}
          </p>
        </div>
      </div>
    </main>
  );
}
