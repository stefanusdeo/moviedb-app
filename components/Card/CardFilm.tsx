import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  image: string;
  title: string;
  id: number;
};

export const CardFilm = ({ image, title, id }: Props) => {
  return (
    <Link
      href={`/detail/${id}`}
      className="border-2 rounded-2xl cursor-pointer border-gray-500 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${image}`}
        alt={title}
        width={350}
        height={450}
        className="rounded-xl h-full"
      />
    </Link>
  );
};
