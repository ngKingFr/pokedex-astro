import { searchPokemon } from "../stores/pokemon.store";

export const SearchBar = () => {
  return (
    <section className="mb-2">
      <label
        htmlFor="pokemon-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Attrape le !
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-black-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="pokemon-search"
          onChange={searchPokemon}
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300"
          placeholder="Rechercher un pokemon"
        />
      </div>
    </section>
  );
};
