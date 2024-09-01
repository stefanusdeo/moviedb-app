import { InputSearch } from "@/components/InputSearch/InputSearch";
import { ListMovies } from "@/components/Pages/home/ListMovies";

export default function Home() {
  return (
    <main className="bg-gray-100 mx-auto py-10 px-12">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold text-gray-500">
            Popular Movies
          </h1>
        </div>
        <div className="flex justify-end">
          <InputSearch />
        </div>
      </div>
      <div className="py-4">
        <ListMovies />
      </div>
    </main>
  );
}
