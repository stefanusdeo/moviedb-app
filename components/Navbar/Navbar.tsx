import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header>
      <nav className="bg-gray-100 text-gray-500 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-2xl font-extrabold">
              Movie
            </Link>
          </div>
          <div className="flex space-x-6">
            {/* <Link
              href="/favorite"
              className="font-semibold text-grey-500 hover:bg-gray-700 hover:text-white p-2 rounded-xl transition duration-300"
            >
              Favorite
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
