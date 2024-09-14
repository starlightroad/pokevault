import { fetchPokemon } from '@/app/_data/pokemon';
import PokemonList from '@/app/_ui/components/pokemon-list';
import Pagination from '@/app/_ui/components/pagination';
import { POKEMON_PER_PAGE } from '@/app/_lib/constants';
import { calculatePaginationOffset } from '@/app/_lib/utils';

type Props = {
  searchParams?: {
    page?: string;
    offset?: string;
  };
};

export default async function Pokedex({ searchParams }: Props) {
  const offsetValue = calculatePaginationOffset(Number(searchParams?.page));

  const pokemonData = await fetchPokemon(POKEMON_PER_PAGE, offsetValue);

  const totalPages = Math.ceil(pokemonData.count / POKEMON_PER_PAGE);

  return (
    <main className="py-20">
      <PokemonList pokemonData={pokemonData} />
      <div className="mt-5 flex items-center justify-center">
        <Pagination pages={totalPages} />
      </div>
    </main>
  );
}
